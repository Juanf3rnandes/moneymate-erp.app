import { UUID } from "crypto";


export enum TipoTransacao {
    receita = 1,
    despesa = 2
}

export interface getTransacaoRequest {
    cod_pessoa:number;
}

export interface getTransacaoResponse{
    id:UUID;
    descricao:string;
    tipoTransacao: TipoTransacao;
    valor:number;
    data:Date;
    cod_cartao:number | null 
    idConta:UUID;
}