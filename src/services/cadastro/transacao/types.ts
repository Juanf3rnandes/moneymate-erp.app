import { ISODate } from "@/providers/utils/types";
import { UUID } from "crypto";

export enum TipoTransacao {
  receita = 1,
  despesa = 2,
}

export enum CategoriaTransacao {
  educacao = 1,
  investimentos = 2,
  lazer = 3,
}

export interface postTransacaoRequest {
  valor: number;
  nomeTransacao: string;
  conta: string;
  cod_pessoa: number;
  tipo: TipoTransacao;
  data: Date;
  cod_cartao: number | null;
  despesaFixa: boolean;
}

export interface postTransacaoResponse {
  message: string;
}

export interface getTransacaoRequest {
  cod_pessoa: number;
}

export interface getTransacaoResponse {
  id: UUID;
  nomeTransacao: string;
  tipoTransacao: TipoTransacao;
  valor: number;
  data: ISODate;
  cod_cartao: number | null;
  idConta: UUID;
  categoria: CategoriaTransacao;
}

export interface deleteTransacaoRequest {
  idTransacao: string;
}
