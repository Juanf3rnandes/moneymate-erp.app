import React, { ReactNode, useState, createContext, useContext } from "react";
import { AuthConfig, IAuthContext, User } from "./types";

export type { AuthConfig, User };

const AuthContext = createContext<IAuthContext>(null as never);
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  configs: AuthConfig;
  children?: ReactNode;
}

export const authConfig: AuthConfig = {
  accessTokenKey: "",
  erpTokenKey: "",
  redirectToKey: "redirectKey",
  afterLoginPath: "/",
};

export function AuthProvider({ configs, children }: AuthProviderProps) {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const authOn = (userInfos: User) => {
    setAuthenticated(true);
    sessionStorage.setItem(
      "moneymate.erp.user",
      JSON.stringify({
        name: userInfos.name,
        acessToken: userInfos.bearerToken,
        cod_pessoa: userInfos.bearerToken,
        emaiL: userInfos.email,
      })
    );
    setUser(userInfos);
  };

  const authOff = () => {};

  const logout = () => {};

  // const redirect = () => {
  //   if (configs.redirectToKey) {
  //     const redirectTo = loadCache<string>(configs.redirectToKey);
  //     setTimeout(() => {
  //       if (router) {
  //         router.push(redirectTo || configs.afterLoginPath);
  //       } else {
  //         window.location.assign(redirectTo || configs.afterLoginPath);
  //       }
  //     }, 200);
  //     removeCache(configs.redirectToKey);
  //   } else {
  //     setTimeout(() => {
  //       if (router) {
  //         router.push(configs.afterLoginPath);
  //       } else {
  //         window.location.assign(configs.afterLoginPath);
  //       }
  //     }, 200);
  //   }
  // };

  const value: IAuthContext = {
    user,
    authenticated,
    authOn,
    authOff,
    logout,
  };

  React.useEffect(() => {
    // Recuperar o estado do usuário do sessionStorage quando o componente for montado
    const storedUser = sessionStorage.getItem("moneymate.erp.user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setAuthenticated(true);
    }
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
