import React from "react";
import { getCartaoResponse } from "@/services/cadastro/cartao/types";
import { useAct, useForm, useService } from "@/providers";
import {
  TipoTransacao,
  postTransacaoRequest,
} from "@/services/cadastro/transacao/types";
import { CartaoService } from "@/services/cadastro/cartao";

export default function useFinanceiroController() {
  const [modalNewDespesaIsOpen, setModalNewDespesaIsOpen] =
    React.useState<boolean>(false);

  const [cartoesList, setCartoesList] = React.useState<getCartaoResponse[]>([]);

  const services = useService((h) => ({
    cartao: new CartaoService(h),
  }));

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

  const getCartaoAction = useAct(
    () => services.cartao.getCartao({ cod_pessoa: 44365 }),
    {
      onSuccess(response) {
        setCartoesList(response.results.data);
      },
    }
  );

  const handleGetCartoes = () => {
    getCartaoAction();
  };

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

  React.useEffect(() => {
    handleGetCartoes();
  }, []);

  return {
    cartoesList,
    getCartaoAction,
    formCreateDespesaCartao,
    modalNewDespesaIsOpen,
    handleGetCartoes,
    handleOpenModalNewDespesa,
    modalStyle,
  };
}
