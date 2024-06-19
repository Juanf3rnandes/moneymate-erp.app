import { UUID } from "crypto";

export enum TipoConta {
  none = 0,
  contaCorrente = 1,
  dinheiro = 2,
  poupanca = 3,
  investimentos = 4,
  outros = 5,
}

export interface getContasRequest {
  cod_pessoa: number;
}

export interface getContasResponse {
  id: UUID;
  instituicao: string;
  descricao: string;
  saldo: number;
  cod_tipo: TipoConta;
  cod_pessoa: number;
}

export interface postContasRequest {
  instituicao: string;
  descricao: string;
  saldo: number;
  cod_tipo: TipoConta;
  cod_pessoa: number;
}
