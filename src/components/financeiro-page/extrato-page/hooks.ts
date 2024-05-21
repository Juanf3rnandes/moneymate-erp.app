import { getTransacoesResponse } from "@/services/cadastro/types";
import React from "react";

export default function useExtratoController() {
  const [transacoes, setTransacoes] = React.useState<getTransacoesResponse[]>(
    []
  );
}
