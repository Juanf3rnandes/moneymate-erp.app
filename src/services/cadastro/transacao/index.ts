import axios from "axios";
import { backendConfig } from "@/config";
import {
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
}
