import React, { useEffect } from "react";
import { format } from "date-fns";
import { getTransacoesResponse } from "@/services/cadastro/types";

export default function useHomePageController() {
  const [userName, setUserName] = React.useState<string>("");
  const [date, setDate] = React.useState<Date>(new Date());
  const [formattedDate, setFormattedDate] = React.useState<string>("");
  const [homeGreeting, setHomeGreeting] = React.useState<string>("");
  const [balancoSaldo, setBalancoSaldo] = React.useState<number>(-1000);
  const [receitas, setReceitas] = React.useState<number>(100);
  const [despesas, setDespesas] = React.useState<number>(1100);
  const [transacoes, setTransacoes] = React.useState<getTransacoesResponse[]>([
    {
      data: new Date(),
      tituloTransacao: "Compra no mercado",
      valor: 100,
      tipo: "receita",
    },
    {
      data: new Date(),
      tituloTransacao: "Mensalidade da faculdade",
      valor: 100,
      tipo: "receita",
    },
    {
      data: new Date(),
      tituloTransacao: "Mensalidade academia",
      valor: 100,
      tipo: "receita",
    },
    {
      data: new Date(),
      tituloTransacao: "Aposta no tigrinho",
      valor: 50,
      tipo: "receita",
    },
    {
      data: new Date(),
      tituloTransacao: "Compra no mercado",
      valor: 350,
      tipo: "receita",
    },
    {
      data: new Date(),
      tituloTransacao: "Compra no mercado",
      valor: 100,
      tipo: "receita",
    },
    {
      data: new Date(),
      tituloTransacao: "Mensalidade da faculdade",
      valor: 100,
      tipo: "receita",
    },
    {
      data: new Date(),
      tituloTransacao: "Mensalidade academia",
      valor: 100,
      tipo: "receita",
    },
    {
      data: new Date(),
      tituloTransacao: "Aposta no tigrinho",
      valor: 50,
      tipo: "despesa",
    },
    {
      data: new Date(),
      tituloTransacao: "Compra no mercado",
      valor: 350,
      tipo: "despesa",
    },
  ]);
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
    handleHomeGreetings,
    useEffect,
  };
}
