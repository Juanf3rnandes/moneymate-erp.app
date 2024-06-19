import { UUID } from "crypto";

export interface getMenuFuncionalidadesErpResponse {
  cod_funcionalidade: number;
  nome: string;
  icon: string;
  url: string;
}

export interface getTransacoesResponse {
  id?: UUID;
  data: Date;
  tituloTransacao: string;
  valor: number;
  tipo: string;
}

export interface getCartoesResponse {
  id: number;
  cod_pessoa: number;
  numero: string;
  bandeira: string;
  tipo: string;
  limite: number;
  descricao: string;
  dia_fechamento: number;
  dia_vencimento: number;
  fatura: number;
}
