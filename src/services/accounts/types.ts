export interface postLoginRequest {
  email: string;
  password: string;
}

export interface loginResponse {
  nome: string;
  email: string;
  bearerToken: string;
}

export interface postRegisterRequest {
  nome: string;
  emaiL: string;
  senha: string;
  cpf?: string;
}

export interface registerResponse {
  resultMessage: string;
}
