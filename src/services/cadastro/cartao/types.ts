export interface getCartaoRequest {
  cod_pessoa: number;
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

export interface postCartaoRequest {
  descricao: string;
  limite: number;
  dia_fechamento: number;
  dia_vencimento: number;
  bandeira: string;
  tipo: string;
  cod_pessoa: number;
}

export interface putCartaoRequest {
  cod_cartao: number;
  descricao: string;
  limite: number;
  dia_fechamento: number;
  dia_vencimento: number;
  bandeira: string;
  tipo: string;
  cod_pessoa: number;
}

export interface postDespesaCartaoRequest {
  valor: number;
  descricao: string;
  data: Date;
  parcelado: boolean;
  valorParcela: number;
  numeroParcelas: number;
}

export interface deleteCartaoRequest {
  idCartao: number;
}

export interface deleteCartaoResponse {
  message: string;
}
