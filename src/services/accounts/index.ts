import { postLoginRequest, loginResponse } from "./types";

import { Http } from "@/providers/http/utils";
export class LoginService {
  constructor(private http: Http) {}

  async postLogin(params: postLoginRequest) {
    return this.http.post<loginResponse>(`WS/login`, {
      baseURL: "localhost:3001",
      params,
    });
  }
}
