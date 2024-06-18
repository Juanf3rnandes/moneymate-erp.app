import axios from "axios";
import {
  deleteCartaoRequest,
  deleteCartaoResponse,
  getCartaoRequest,
  getCartaoResponse,
  postCartaoRequest,
} from "./types";
import { backendConfig } from "@/config";

export class CartaoService {
  constructor() {}

  async getCartao(params: getCartaoRequest) {
    return axios.get(`${backendConfig.cadastro}/cartao/${params.cod_pessoa}`);
  }

  async postCartao(params: postCartaoRequest) {
    return axios.post(`${backendConfig.cadastro}/cartao`, params);
  }

  async deleteCartao(params: deleteCartaoRequest) {
    return axios.delete<deleteCartaoResponse>(
      `${backendConfig.cadastro}/cartao/${params.idCartao}`
    );
  }
}
