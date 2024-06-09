import { camelCaseProps, isBrowser, isPtBr } from "@/providers/utils";
import { HttpResponse, HttpStatus } from "../types";

function resolveData<T>(data: T) {
  if (typeof data === "boolean") {
    return data;
  }
  if (typeof data === "string" && data) {
    return data;
  }
  if (data) {
    return camelCaseProps(data);
  }
  return [];
}

const feedbackPTBR = {
  offline: "Parece que você esta sem conexão, verifique e tente novamente!",
  unauth:
    "Sessão expirada, tente fazer login novamente. Caso o erro persista, entre em contato com o suporte!",
  unknown:
    "Erro desconhecido, já notificamos o suporte. Aguarde um momento e tente novamente! ({v})",
  forbidden:
    "Serviço indisponivel, já notificamos o suporte. Aguarde um momento e tente novamente! ({v})",
  noContent: "Nenhum item encontrado!",
};

const feedbackENUS = {
  offline: "It looks like you have no connection, check and try again!",
  unauth:
    "Session expired, try login in again. If the error persists, contact support!",
  unknown:
    "Unknown error, we have already notified support. Please wait a moment and try again! ({v})",
  forbidden:
    "Service unavailable, we have already notified support. Please wait a moment and try again! ({v})",
  noContent: "No items found!",
};

function replaceVars(str: string, value?: string) {
  return String(str).replace("{v}", value || "empty");
}

export function resolveBackend<T>(
  status?: HttpStatus,
  data?: T,
  baseURL?: string,
  onUnauthorized?: (path?: string) => void,
  forceErrorOnNoContent?: boolean
): Promise<HttpResponse<T>> {
  const results = resolveData(data);

  const messages = isPtBr() ? feedbackPTBR : feedbackENUS;

  if (!status) {
    if (isBrowser()) {
      if (!navigator.onLine) {
        return Promise.reject({
          status: 400,
          message: messages.offline,
          results,
        });
      }
    }

    return Promise.reject({
      status: 502,
      message: replaceVars(messages.forbidden, baseURL),
      results,
    });
  }

  if (
    status === 200 &&
    results["status"] &&
    results["status"]["codigoStatus"] > 1
  ) {
    return Promise.reject({
      status: 400,
      message: `${results["status"]["descricaoStatus"]} (Cod: ${results["status"]["codigoStatus"]})`,
      results,
    });
  }

  if (status === 200 && (results["traceId"] || 0) > 1) {
    return Promise.reject({
      status: 400,
      message: results["message"],
      results,
    });
  }

  if (status === 200) {
    return Promise.resolve({
      status,
      message: "Ok",
      results: results["results"] || results["dados"] || results,
    });
  }

  if (status === 204) {
    const res = {
      status,
      message: messages.noContent,
      results,
    };

    if (forceErrorOnNoContent) {
      return Promise.reject(res);
    }
    return Promise.resolve(res);
  }

  if (status === 401) {
    if (isBrowser()) {
      onUnauthorized?.(window.location.pathname + window.location.search);
    } else {
      onUnauthorized?.();
    }

    return Promise.reject({
      status,
      message: messages.unauth,
      results,
    });
  }

  if (data && Array.isArray(data)) {
    return Promise.reject({
      status,
      message: results[0]?.errorMessage || results[0],
      results,
    });
  }

  if (typeof data === "string" && !!data.length) {
    return Promise.reject({
      status,
      message: results,
      results,
    });
  }

  if (results["error"] && results["error_description"]) {
    return Promise.reject({
      status,
      message: results["error_description"],
      results,
    });
  }

  if (results["errors"]?.["chaveValidacao"]) {
    return Promise.reject({
      status,
      message: results["errors"]["chaveValidacao"],
      results,
    });
  }

  if (results["errors"] && Object.keys(results["errors"]).length) {
    const firstKey = Object.keys(results["errors"])[0];
    return Promise.reject({
      status,
      message: results["errors"][firstKey],
      results,
    });
  }

  if (results["message"] || results["messages"]) {
    return Promise.reject({
      status,
      message: results["message"] || results["messages"],
      results: results["results"] || results,
    });
  }

  return Promise.reject({
    status: 418,
    message: replaceVars(messages.unknown, baseURL),
    results,
  });
}
