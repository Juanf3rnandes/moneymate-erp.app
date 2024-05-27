import axios from "axios";
import { postNewReceitaRequest, postNewReceitaResponse } from "./types";

export default class ReceitasService {
  constructor() {}

  postReceita(params: postNewReceitaRequest) {
    return axios.post<postNewReceitaResponse>(
      "http://localhost:3000/receitas",
      params
    );
  }
}
