import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export interface User {
  id: number;
  name: string;
  email: string;
  bearerToken: string;
  cod_pessoa: number;
}

export interface IAuthContext {
  user?: User;
  cod_pessoa?: number;
  authenticated: boolean;
  authOn: (user: User) => void;
  authOff: () => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  authenticated: false,
  authOn: () => {},
  authOff: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | undefined>(undefined);
  const router = useRouter();

  const authOn = (userData: User) => {
    setAuthenticated(true);
    setUser(userData);
    Cookies.set("moneymate.erp.user", JSON.stringify(userData), { expires: 7 });
  };

  const authOff = () => {
    setAuthenticated(false);
    setUser(undefined);
    Cookies.remove("moneymate.erp.user");
  };

  const logout = () => {
    authOff();
    router.push("/login");
  };

  useEffect(() => {
    const storedUser = Cookies.get("moneymate.erp.user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setAuthenticated(true);
    } else {
      // Não há usuário logado, redirecionar para a página de login
      router.push("/login");
    }
  }, [router.pathname]); // Verificar o estado de autenticação sempre que a rota for alterada

  const value: IAuthContext = {
    user,
    authenticated,
    authOn,
    authOff,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
