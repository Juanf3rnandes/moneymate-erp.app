import React from "react";
import { getCartoesResponse } from "@/services/cadastro/types";

export default function useFinanceiroController() {
  const [modalNewDespesaIsOpen, setModalNewDespesaIsOpen] =
    React.useState<boolean>(false);

  const [cartoesList, setCartoesList] = React.useState<getCartoesResponse[]>([
    {
      id: 1,
      cod_pessoa: 123456,
      numero: "1234 5678 9012 3456",
      bandeira: "Visa",
      tipo: "Crédito",
      limite: 5000,
      descricao: "Cartão de crédito principal",
      diaFechamento: 25,
      diaVencimento: 10,
    },
  ]);

  const handleOpenModalNewDespesa = () => {
    setModalNewDespesaIsOpen(!modalNewDespesaIsOpen);
  };

  return {
    cartoesList,
    modalNewDespesaIsOpen,
    handleOpenModalNewDespesa,
  };
}
