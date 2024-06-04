import { Http } from "@/providers/http/utils";
import { postNewReceitaRequest, postNewReceitaResponse } from "./types";

export default class ReceitasService {
  constructor(private http: Http) {}

  postReceita(params: postNewReceitaRequest) {
    return this.http.post<postNewReceitaResponse>(
      `http://localhost:3000/receitas`,
      {
        baseURL: "http://localhost:3000",
        params: params,
      }
    );
  }
}
