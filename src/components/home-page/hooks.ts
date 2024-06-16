import React, { useEffect } from "react";
import { format } from "date-fns";
import { getTransacaoResponse } from "@/services/cadastro/transacao/types";
import { randomUUID } from "crypto";
import { useAct, useService } from "@/providers";
import { TransacaoService } from "@/services/cadastro/transacao";

export default function useHomePageController() {
  const [userName, setUserName] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>(new Date());
  const [formattedDate, setFormattedDate] = React.useState<string>("");
  const [homeGreeting, setHomeGreeting] = React.useState<string>("");
  const [balancoSaldo, setBalancoSaldo] = React.useState<number>(-1000);
  const [receitas, setReceitas] = React.useState<number>(100);
  const [despesas, setDespesas] = React.useState<number>(1100);
  const [despesaVencida, setDespesaVencida] = React.useState<boolean>(true);

  const [transacoes, setTransacoes] = React.useState<getTransacaoResponse[]>(
    []
  );

  const services = useService((h) => ({
    login: new TransacaoService(h),
  }));

  const getTransacoesAction = useAct(
    () => services.login.getTransacao({ cod_pessoa: 44365 }),
    {
      onSuccess(response) {
        setTransacoes(response.results.data);
      },
    }
  );

  const vencimentoDespesa = React.useCallback(() => {
    const despesas = transacoes.filter(
      (x) => x.tipoTransacao == 2 || x.data == new Date()
    );
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
    handleGetTransacoes();
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
