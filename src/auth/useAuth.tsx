import React, {
  ReactNode,
  useMemo,
  useEffect,
  useState,
  createContext,
  useContext,
} from "react";
import { useRouter } from "next/router";
import { AuthConfig, IAuthContext, User } from "./types";
import { camelCaseProps, saveCookie, loadCookies } from "@/providers";
import { parseJwt } from "@/providers/utils/crypto";
import { loadCache, removeCache } from "@/providers/utils/cache";

export type { AuthConfig, User };

const AuthContext = createContext<IAuthContext>(null as never);
export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  configs: AuthConfig;
  children?: ReactNode;
}

function factoryUser(accessToken?: string): User | undefined {
  if (accessToken) {
    const jwt = parseJwt(accessToken);
    const obj = camelCaseProps(jwt);
    return {
      ...obj,
      codPessoa: Number(obj.codPessoa),
      email: obj.email || "",
      login: obj.login || "",
      nome: obj.nome || "",
    } as User;
  }
  return undefined;
}

export function AuthProvider({ configs, children }: AuthProviderProps) {
  const router = useRouter();
  const [accessToken, setAccessToken] = useState<string>();
  const [authenticated, setAuthenticated] = useState<boolean>(false);

  const authOn = (accessToken: string) => {
    setAccessToken(accessToken);
    saveCookie({ [keys.accounts]: accessToken });
  };

  const redirect = () => {
    if (configs.redirectToKey) {
      const redirectTo = loadCache<string>(configs.redirectToKey);
      setTimeout(() => {
        if (router) {
          router.push(redirectTo || configs.afterLoginPath);
        } else {
          window.location.assign(redirectTo || configs.afterLoginPath);
        }
      }, 200);
      removeCache(configs.redirectToKey);
    } else {
      setTimeout(() => {
        if (router) {
          router.push(configs.afterLoginPath);
        } else {
          window.location.assign(configs.afterLoginPath);
        }
      }, 200);
    }
  };

  const value = {
    authenticated,
    accessToken,
    authOn,
    redirect,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
