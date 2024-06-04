import { Axios } from "axios";
import React from "react";
import { HttpConfig } from "./types";
import { factoryHttp, factoryHttpMock } from "./utils";

const AxiosContext = React.createContext<Axios>(null as never);
export const useHttp = () => React.useContext(AxiosContext);

export function useService<T>(factory: (axios: Axios) => T) {
  const axiosHttp = useHttp();
  const service = React.useMemo(() => factory(axiosHttp), [factory, axiosHttp]);
  return service;
}
