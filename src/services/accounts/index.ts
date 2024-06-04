import axios from "axios";
import { postLoginRequest, loginResponse } from "./types";
import { baseURLApiCadastro } from "@/config/apiConfig";
import { Http } from "@/providers/http/utils";
export class LoginService {
  private readonly baseUrl = baseURLApiCadastro;
  constructor(private http: Http) {}

  async postLogin(params: postLoginRequest) {
    return this.http.post<loginResponse>(`${this.baseUrl}/login`, params);
  }
}
