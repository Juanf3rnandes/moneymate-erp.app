export enum RelatorioItem {
    Despesas = 1,
    receitas= 2,
    porCategoria=3
}

export interface postRelatorioItemGenerateRequest {
    codigoView:number
}

export interface postRelatorioItemGenerateResponse {
    codigo:number;
    descricao:string;
}