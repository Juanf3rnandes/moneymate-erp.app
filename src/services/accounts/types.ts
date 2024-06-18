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
  emaiL: string;
  senha: string;
  cpf_cnpj?: string | null;
}

export interface postRegisterResponse {
  resultMessage: string;
}
