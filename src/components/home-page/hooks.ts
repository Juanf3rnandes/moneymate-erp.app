import React, { useEffect } from "react";
import { format } from "date-fns";
import { getTransacaoResponse } from "@/services/cadastro/transacao/types";
import { useAct, useService } from "@/providers";
import { TransacaoService } from "@/services/cadastro/transacao";
import { useAuth } from "@/auth";

export default function useHomePageController() {
  const { user } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [userName, setUserName] = React.useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = React.useState<Date>(new Date());
  const [formattedDate, setFormattedDate] = React.useState<string>("");
  const [homeGreeting, setHomeGreeting] = React.useState<string>("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [balancoSaldo, setBalancoSaldo] = React.useState<number>(-1000);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [receitas, setReceitas] = React.useState<number>(100);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [despesas, setDespesas] = React.useState<number>(1100);
  const [despesaVencida, setDespesaVencida] = React.useState<boolean>(false);

  const [transacoes, setTransacoes] = React.useState<getTransacaoResponse[]>(
    []
  );

  const services = useService((h) => ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login: new TransacaoService(),
  }));

  const getTransacoesAction = useAct(
    () =>
      services.login.getTransacao({ cod_pessoa: user?.cod_pessoa as number }),
    {
      onSuccess(response) {
        setTransacoes(response.results.data);
      },
    }
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const vencimentoDespesa = React.useCallback(() => {
    const despesas = transacoes.filter((x) => x.tipoTransacao == 2);
    if (despesas) {
      setDespesaVencida(true);
    }
  }, [transacoes]);

  const handleHomeGreetings = () => {
    const currentDate = new Date(date);
    const formatted = format(currentDate, "dd/MM/yyyy");
    setFormattedDate(formatted);
    const hours = date.getHours();

    if (hours >= 0 && hours < 12) {
      setHomeGreeting("Bom dia");
    } else if (hours >= 12 && hours < 18) {
      setHomeGreeting("Boa tarde");
    } else {
      setHomeGreeting("Boa noite");
    }
  };

  const handleGetTransacoes = () => {
    getTransacoesAction();
  };

  //?? ao iniciar
  React.useEffect(() => {
    handleHomeGreetings();
    getTransacoesAction();
  }, []);

  return {
    homeGreeting,
    date,
    getTransacoesAction,
    balancoSaldo,
    receitas,
    despesas,
    transacoes,
    formattedDate,
    despesaVencida,
    handleHomeGreetings,
    handleGetTransacoes,
    useEffect,
  };
}
