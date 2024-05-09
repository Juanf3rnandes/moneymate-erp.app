import axios from "axios";
import { loginRequest, loginResponse } from "./types";
import { baseURLApiCadastro } from "@/config/apiConfig";
export class LoginService {
  private readonly baseUrl = baseURLApiCadastro;
  constructor() {}

  async postLogin(params: loginRequest) {
    return axios.post<loginResponse>(`${this.baseUrl}/login`, params);
  }
}
