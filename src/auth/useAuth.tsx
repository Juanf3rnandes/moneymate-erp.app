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
    const userData: User = {
      ...userInfos,
      cod_pessoa: userInfos.cod_pessoa, // Certifique-se de manter o cod_pessoa
    };

    setAuthenticated(true);
    sessionStorage.setItem("moneymate.erp.user", JSON.stringify(userData));
    setUser(userData);
  };

  const authOff = () => {};

  const logout = () => {};

  const value: IAuthContext = {
    user,
    authenticated,
    authOn,
    authOff,
    logout,
  };

  React.useEffect(() => {
    const storedUser = sessionStorage.getItem("moneymate.erp.user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setAuthenticated(true);
    }
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
