export interface loginRequest {
  email: string;
  password: string;
}

export interface loginResponse {
  nome: string;
  email: string;
  bearerToken: string;
}
