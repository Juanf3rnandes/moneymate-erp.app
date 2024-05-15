import axios from "axios";
import { postLoginRequest, loginResponse } from "./types";
import { baseURLApiCadastro } from "@/config/apiConfig";
export class LoginService {
  private readonly baseUrl = baseURLApiCadastro;
  constructor() {}

  async postLogin(params: postLoginRequest) {
    return axios.post<loginResponse>(`${this.baseUrl}/login`, params);
  }
}
