import { UUID } from "crypto";


export enum TipoTransacao {
    receita = 1,
<<<<<<< HEAD
    despesa  =2, 
}

export interface postTransacaoRequest {
    valor:number;
    descricao:string;
    conta:UUID;
    cod_pessoa:number;
    tipo:TipoTransacao
=======
    despesa = 2
>>>>>>> b1d9c412c5e109d41ba3666446906dca18bdd490
}

export interface getTransacaoRequest {
    cod_pessoa:number;
}

export interface getTransacaoResponse{
    id:UUID;
<<<<<<< HEAD
    valor:number;
    descricao:string;
    conta:UUID;
    cod_pessoa:number;
    tipo:TipoTransacao
=======
    descricao:string;
    tipoTransacao: TipoTransacao;
    valor:number;
    data:Date;
    cod_cartao:number | null 
    idConta:UUID;
>>>>>>> b1d9c412c5e109d41ba3666446906dca18bdd490
}