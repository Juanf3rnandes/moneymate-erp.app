import { backendConfig } from "@/config";
import axios from "axios";
import { getContasRequest, postContasRequest } from "./types";
export class ContaService {
  constructor() {}

  async getContas(params: getContasRequest) {
    return axios.get(`${backendConfig.cadastro}/conta/${params.cod_pessoa}`);
  }

  async postConta(params: postContasRequest) {
    return axios.post(`${backendConfig.cadastro}/conta`, params);
  }
}
