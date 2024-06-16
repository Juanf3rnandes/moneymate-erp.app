import React from "react";
import { getCartoesResponse } from "@/services/cadastro/types";
import { useForm } from "@/providers";
import {
  TipoTransacao,
  postTransacaoRequest,
} from "@/services/cadastro/transacao/types";

export default function useFinanceiroController() {
  const [modalNewDespesaIsOpen, setModalNewDespesaIsOpen] =
    React.useState<boolean>(false);

  const [cartoesList, setCartoesList] = React.useState<getCartoesResponse[]>(
    []
  );

  const formCreateDespesaCartao = useForm<postTransacaoRequest>(
    {
      cod_pessoa: 0,
      conta: "",
      data: new Date(),
      nomeTransacao: "",
      tipo: TipoTransacao.despesa,
      valor: 0,
      cod_cartao: 0,
      despesaFixa: false,
    },
    (f) => !!f.cod_pessoa && !!f.cod_cartao
  );

  const handleOpenModalNewDespesa = () => {
    setModalNewDespesaIsOpen(!modalNewDespesaIsOpen);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    borderRadius: 2,
    p: 4,
  };

  //?? ao iniciar

  return {
    cartoesList,
    formCreateDespesaCartao,
    modalNewDespesaIsOpen,
    handleOpenModalNewDespesa,
    modalStyle,
  };
}
