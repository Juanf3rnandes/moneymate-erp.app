import { ISODate } from "@/providers/utils/types";

export interface User {
  nome: string;
  codPessoa: number;
  email: string;
  login: string;
}

export interface IAuthContext {
  authenticated: boolean | undefined;
  accessToken: string | undefined;
  user?: User;
  // login
  authOn(accessToken: string, expires?: ISODate): string;
  // logout
  authOff(): void;
  // login with redirect
  login(accessToken: string, erpToken?: string, expires?: ISODate): void;
  // logout with redirect and purge cache
  logout(): void;
  redirect(): void;
  handleUnauthorized(redirectTo?: string): void;
  handleChangeAvatar(url?: string): void;
  // utils
  /** user.tipoUsuario == 'USR' */
  isUsuarioHubert: boolean;
  /** user.tipoUsuario == 'FUNC' */
  isFuncionario: boolean;
  /** user.tipoUsuario == 'SIND' */
  isSindico: boolean;
  /** user.tipoUsuario == 'CONS' */
  isConselheiro: boolean;
  /** user.tipoUsuario == 'UNID' */
  isMorador: boolean;
  /** user.tipoUsuario == 'ADVCO' */
  isAdvogado: boolean;
  /** user.tipoUsuario == 'FORN' */
  isFornecedor: boolean;
  /** codigoPessoa == user.codigoPessoa */
  isSelf: (codigoPessoa: number) => boolean;
  /** isTipoUsuario('USR') == true/false */
  isTipoUsuario: (tipo: string) => boolean;
}

export interface AuthConfig {
  accessTokenKey: string | string[];
  erpTokenKey?: string | string[];
  redirectToKey?: string;
  afterLoginPath: string;
}
