export interface postNewReceitaRequest {
  valor: number;
  descricao: string;
  data: string;
  recebida: boolean;
}

export interface postNewReceitaResponse {
  message: string;
}
