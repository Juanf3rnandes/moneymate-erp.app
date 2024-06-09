import { Http } from "@/providers/http/utils";
import { postNewReceitaRequest, postNewReceitaResponse } from "./types";
import { backendConfig } from "@/config";

export default class ReceitasService {
  constructor(private http: Http) {}

  postReceita(params: postNewReceitaRequest) {
    return this.http.post<postNewReceitaResponse>(`/receitas`, {
      baseURL: backendConfig.cadastro,
      params: params,
    });
  }
}
