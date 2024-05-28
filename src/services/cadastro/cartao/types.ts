export interface postDespesaCartaoRequest {
  valor: number;
  descricao: string;
  data: Date;
  parcelado: boolean;
  valorParcela: number;
  numeroParcelas:number;
}
