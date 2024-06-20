import {
  postLoginRequest,
  postRegisterRequest,
  postRegisterResponse,
} from "./types";
import axios from "axios";
import { backendConfig } from "@/config";

export class LoginService {
  constructor() {}

  async postLogin(params: postLoginRequest) {
    return axios.post(`${backendConfig.accounts}/login`, params);
  }

  async postRegister(params: postRegisterRequest) {
    return axios.post<postRegisterResponse>(
      `${backendConfig.accounts}/registro`,
      params
    );
  }
}
