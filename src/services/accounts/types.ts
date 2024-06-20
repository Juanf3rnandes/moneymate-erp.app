export interface postLoginRequest {
  login: string;
  senha: string;
}

export interface loginResponse {
  name: string;
  email: string;
  bearerToken: string;
  cod_pessoa: number;
}

export interface postRegisterRequest {
  nome: string;
  email: string;
  senha: string;
  cpf_cnpj?: string | null;
  ativado: boolean;
}

export interface postRegisterResponse {
  resultMessage: string;
}
