import { UUID } from "crypto";

export enum TipoTransacao {
  receita = 1,
  despesa = 2,
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
  data: Date;
  cod_cartao: number | null;
  idConta: UUID;
}
