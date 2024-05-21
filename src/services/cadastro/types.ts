export interface getMenuFuncionalidadesErpResponse {
  cod_funcionalidade: number;
  nome: string;
  icon: string;
  url: string;
}

export interface getTransacoesResponse {
  id: string;
  data: Date;
  tituloTransacao: string;
  valor: number;
  tipo: string;
}

export interface getCartoesResponse {
  id: number;
  cod_pessoa: number;
  numero: string;
  bandeira: string;
  tipo: string;
  limite: number;
  descricao: string;
  diaFechamento: number;
  diaVencimento: number;
}
