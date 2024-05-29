import { Axios } from "axios";
import { postNewReceitaRequest, postNewReceitaResponse } from "./types";

export default class ReceitasService {
  constructor(private axios: Axios) {}

  postReceita(params: postNewReceitaRequest) {
    return this.axios.post<postNewReceitaResponse>(
      "http://localhost:3000/receitas",
      {
        params: params,
      }
    );
  }
}
