import axios from "axios";
import { backendConfig } from "@/config";
import {
  deleteTransacaoRequest,
  getTransacaoRequest,
  postTransacaoRequest,
  postTransacaoResponse,
} from "./types";
export class TransacaoService {
  constructor() {}

  async getTransacao(params: getTransacaoRequest) {
    return axios.get(
      `${backendConfig.cadastro}/transacoes/${params.cod_pessoa}`
    );
  }

  async deleteTransacao(params: deleteTransacaoRequest) {
    return axios.delete(
      `${backendConfig.cadastro}/transacoes/${params.idTransacao}`
    );
  }
}
