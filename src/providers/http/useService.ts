import React from "react";
import { Http } from "./utils";

const HttpContext = React.createContext<Http>(null as never);
export const useHttp = () => React.useContext(HttpContext);

// interface HttpProviderProps {
//   configs?: HttpConfig;
//   children?: React.ReactNode;
// }

export function useService<T>(factory: (http: Http) => T) {
  const http = useHttp();
  const service = React.useMemo(() => factory(http), [factory, http]);
  return service;
}
