export interface getCartaoRequest {
  cod_pessoa: number;
}

export interface getCartaoResponse {
  id: number;
  bandeira: string;
  tipo: string;
  limite: number;
}

export interface postDespesaCartaoRequest {
  valor: number;
  descricao: string;
  data: Date;
  parcelado: boolean;
  valorParcela: number;
  numeroParcelas: number;
}
