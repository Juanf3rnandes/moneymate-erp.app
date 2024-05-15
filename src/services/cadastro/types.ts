export interface getMenuFuncionalidadesErpResponse {
  cod_funcionalidade: number;
  nome: string;
  icon: string;
  url: string;
}

export interface getTransacoesResponse {
  data: Date;
  tituloTransacao: string;
  valor: number;
}

export interface getCartoesResponse {
  id: number;
  cod_pessoa: number;
  numero: string;
  bandeira: string;
  tipo: string;
  limite: number;
}
