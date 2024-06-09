import React, { useEffect } from "react";
import { format } from "date-fns";
import { getTransacaoResponse } from "@/services/cadastro/transacao/types";
import { randomUUID } from "crypto";

export default function useHomePageController() {
  const [userName, setUserName] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>(new Date());
  const [formattedDate, setFormattedDate] = React.useState<string>("");
  const [homeGreeting, setHomeGreeting] = React.useState<string>("");
  const [balancoSaldo, setBalancoSaldo] = React.useState<number>(-1000);
  const [receitas, setReceitas] = React.useState<number>(100);
  const [despesas, setDespesas] = React.useState<number>(1100);
  const [despesaVencida, setDespesaVencida] = React.useState<boolean>(false);

  const [transacoes, setTransacoes] = React.useState<getTransacaoResponse[]>([
    {
      data: new Date(),
      descricao: "Compra no mercado",
      valor: 100,
      tipoTransacao: 2,
      cod_cartao: null,
      id: "8692b055-a456-4b25-b3ba-c33ba231c26c",
      idConta: "8692b055-a456-4b25-b3ba-c33ba231c26a",
    },
    {
      data: new Date(),
      descricao: "Compra no mercado",
      valor: 100,
      tipoTransacao: 2,
      cod_cartao: null,
      id: "8692b055-a456-4b25-b3ba-c33ba231c26c",
      idConta: "8692b055-a456-4b25-b3ba-c33ba231c26a",
    },
    {
      data: new Date(),
      descricao: "Compra no mercado",
      valor: 100,
      tipoTransacao: 2,
      cod_cartao: null,
      id: "8692b055-a456-4b25-b3ba-c33ba231c26c",
      idConta: "8692b055-a456-4b25-b3ba-c33ba231c26a",
    },
  ]);

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

  useEffect(() => {
    handleHomeGreetings();
  }, [date]);

  return {
    homeGreeting,
    date,
    balancoSaldo,
    receitas,
    despesas,
    transacoes,
    formattedDate,
    despesaVencida,
    handleHomeGreetings,
    useEffect,
  };
}
