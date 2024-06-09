import { HttpMethod, HttpStatus } from "../types";
import { resolveBackend } from "./backend";
import { bodySerializer } from "./body";
import { headersSerializer } from "./headers";
import { paramsSerializer, urlParamsSerializer } from "./params";
import { responseSerializer } from "./response";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FetchConfig<B, P, T, U, H = Record<string, any>> {
  baseURL: string;
  headers?: H;
  headersSerializer?: (headers: H) => Headers;
  body?: B;
  bodySerializer?: (body: B) => XMLHttpRequestBodyInit;
  params?: P;
  urlParams?: U;
  paramsSerializer?: (params: P) => string;
  urlParamsSerializer?: (url: string, params: U) => string;
  responseSerializer?: (response: Response) => Promise<T>;
  forceErrorOnNoContent?: boolean;
}

export interface FetchFactoryConfig {
  accessToken?: string | ((url: string) => string);
  onUnauthorized?: (redirectTo?: string) => void;
}

export function customFetch(
  method: HttpMethod,
  fetchConfig?: FetchFactoryConfig
) {
  return function <
    T = unknown,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    B extends object = any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    P extends object = any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    U extends object = any
  >(url: string, configs: FetchConfig<B, P, T, U>) {
    if (!configs?.baseURL || url.includes("http")) {
      throw new Error(
        `👀 don't send BASE URL API in URL, use config [baseURL] instead! (${url})`
      );
    }
    if (url.includes("?")) {
      throw new Error(
        `👀 don't use query params in URL, use config [params] instead! (${url})`
      );
    }

    const query = paramsSerializer(configs?.params, {
      customSerializer: configs?.paramsSerializer,
      withQuestionMark: true,
      doubleEncodeURI: true,
    });

    const urlWithChangedParams = urlParamsSerializer(url, configs?.urlParams, {
      customSerializer: configs?.urlParamsSerializer,
      doubleEncodeURI: true,
    });

    const uri = `${configs?.baseURL || ""}${urlWithChangedParams}${query}`;

    const body = bodySerializer(configs?.body, {
      customSerializer: configs?.bodySerializer,
    });

    const headers = headersSerializer(
      {
        Authorization:
          fetchConfig?.accessToken &&
          `Bearer ${
            typeof fetchConfig.accessToken === "string"
              ? fetchConfig.accessToken
              : fetchConfig.accessToken(uri)
          }`,
        ...configs.headers,
      },
      { body, customSerializer: configs?.headersSerializer }
    );

    return () =>
      fetch(uri, { body, method, headers })
        .then(async (res) => {
          const data = await responseSerializer(res, {
            customSerializer: configs?.responseSerializer,
          });

          if (res.ok) {
            return resolveBackend(
              res.status as HttpStatus,
              data as unknown as T,
              configs?.baseURL,
              undefined,
              configs?.forceErrorOnNoContent
            );
          }
          return Promise.reject({ status: res.status, data });
        })
        .catch((err) => {
          let status = 0,
            data = err;
          try {
            if (Object.prototype.hasOwnProperty.call(err, "status")) {
              status = err.status;
            }
          } catch {
            /* nothing */
          }
          try {
            if (Object.prototype.hasOwnProperty.call(err, "data")) {
              data = err.data;
            }
          } catch {
            /* nothing */
          }
          return resolveBackend<T>(
            status as HttpStatus,
            data,
            configs?.baseURL,
            fetchConfig?.onUnauthorized,
            configs?.forceErrorOnNoContent
          );
        });
  };
}

export type CustomFetch = ReturnType<typeof customFetch>;

export function mockFetch(method: HttpMethod, mockURL: string) {
  return (url: string) => {
    return customFetch(method)(url, {
      baseURL: mockURL,
    });
  };
}
