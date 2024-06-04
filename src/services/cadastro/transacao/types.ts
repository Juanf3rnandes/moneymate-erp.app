import { UUID } from "crypto";


export enum TipoTransacao {
    receita = 1,
    despesa  =2, 
}

export interface postTransacaoRequest {
    valor:number;
    descricao:string;
    conta:UUID;
    cod_pessoa:number;
    tipo:TipoTransacao
}

export interface getTransacaoRequest {
    cod_pessoa:number;
}

export interface getTransacaoResponse{
    id:UUID;
    valor:number;
    descricao:string;
    conta:UUID;
    cod_pessoa:number;
    tipo:TipoTransacao
}