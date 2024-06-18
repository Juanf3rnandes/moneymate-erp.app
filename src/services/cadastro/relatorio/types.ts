export enum RelatorioItem {
    Despesas = 1,
    receitas= 2,
    porCategoria=3
}

export interface RelatorioItemGenerate {
    codigo:number;
    descricao:string;
}