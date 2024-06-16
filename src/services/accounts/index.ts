import {
  postLoginRequest,
  loginResponse,
  postRegisterRequest,
  postRegisterResponse,
} from "./types";
import axios from "axios";
import { backendConfig } from "@/config";

export class LoginService {
  constructor() {}

  async postLogin(params: postLoginRequest) {
    return axios
      .post<loginResponse>(`${backendConfig.accounts}/login`, params)
      .then((res) =>
        sessionStorage.setItem("moneymate.erp", JSON.stringify(res.data))
      );
  }

  async postRegister(params: postRegisterRequest) {
    return axios.post<postRegisterResponse>(
      `${backendConfig.accounts}/registro`,
      params
    );
  }
}
