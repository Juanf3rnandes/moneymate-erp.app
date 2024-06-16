import axios from "axios";
import { getCartaoRequest, getCartaoResponse } from "./types";
import { backendConfig } from "@/config";

export class CartaoService {
  constructor() {}

  async getCartao(params: getCartaoRequest) {
    return axios.get(`${backendConfig.cadastro}/cartao/${params.cod_pessoa}`);
  }
}
