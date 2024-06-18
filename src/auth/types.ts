import { ISODate } from "@/providers/utils/types";

export interface User {
  name: string;
  cod_pessoa: number;
  email: string;
  bearerToken: string;
}

export interface IAuthContext {
  authenticated: boolean;

  user?: User | null;
  // login
  authOn(user: User): void;
  // logout
  authOff(): void;
  // login with redirect

  // logout with redirect and purge cache
  logout(): void;

  // utils
}
export interface AuthConfig {
  accessTokenKey: string | string[];
  erpTokenKey?: string | string[];
  redirectToKey?: string;
  afterLoginPath: string;
}
