import React from "react";
import {
  getCartoesResponse,
  postCartaoRequest,
  putCartaoRequest,
} from "@/services/cadastro/cartao/types";
import { useAct, useForm, useService } from "@/providers";
import {
  TipoTransacao,
  getTransacaoResponse,
  postTransacaoRequest,
} from "@/services/cadastro/transacao/types";
import { CartaoService } from "@/services/cadastro/cartao";
import { TransacaoService } from "@/services/cadastro/transacao";
import { useAuth } from "@/auth";

export default function useFinanceiroController() {
  const { user } = useAuth();

  const [modalNewDespesaIsOpen, setModalNewDespesaIsOpen] =
    React.useState<boolean>(false);

  const [cartoesList, setCartoesList] = React.useState<getCartoesResponse[]>(
    []
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [transacoes, setTransacoes] = React.useState<getTransacaoResponse[]>(
    []
  );
  const [selectedCard, setSelectedCard] = React.useState<null | number>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const services = useService((h) => ({
    cartao: new CartaoService(h),
    transacao: new TransacaoService(h),
  }));

  const [postCartaoModalIsOpen, setPostCartaoModalIsOpen] =
    React.useState<boolean>(false);

  const [deleteCartaoModalIsOpen, setDeleteCartaoModalIsOpen] =
    React.useState<boolean>(false);

  const [editCartaoModalIsOpen, setEditCartaoModalIsOpen] =
    React.useState<boolean>(false);

  const formCreateDespesaCartao = useForm<postTransacaoRequest>(
    {
      cod_pessoa: 0,
      conta: "",
      data: new Date(),
      nomeTransacao: "",
      tipo: TipoTransacao.none,
      valor: 0,
      cod_cartao: 0,
      despesaFixa: false,
      metodo_pagamento: "",
    },
    (f) => !!f.cod_pessoa && !!f.cod_cartao
  );

  const formCreateCartao = useForm<postCartaoRequest>(
    {
      bandeira: "",
      cod_pessoa: 0,
      descricao: "",
      dia_fechamento: 0,
      dia_vencimento: 0,
      limite: 0,
      tipo: "",
    },
    (f) =>
      !!f.cod_pessoa &&
      !!f.descricao &&
      !!f.bandeira &&
      !!f.tipo &&
      !!f.limite &&
      !!f.dia_fechamento &&
      !!f.dia_vencimento
  );

  const formEditCartao = useForm<putCartaoRequest>(
    {
      cod_cartao: 0,
      bandeira: "",
      cod_pessoa: 0,
      descricao: "",
      dia_fechamento: 0,
      dia_vencimento: 0,
      limite: 0,
      tipo: "",
    },
    (f) =>
      !!f.cod_pessoa &&
      !!f.descricao &&
      !!f.bandeira &&
      !!f.tipo &&
      !!f.limite &&
      !!f.dia_fechamento &&
      !!f.dia_vencimento
  );

  const getCartaoAction = useAct(
    () => services.cartao.getCartao({ cod_pessoa: user?.cod_pessoa as number }),
    {
      onSuccess(response) {
        setCartoesList(response.results.data);
      },
    }
  );

  const postCartaoAction = useAct(
    () =>
      services.cartao.postCartao({
        bandeira: formCreateCartao.value.bandeira,
        cod_pessoa: user?.cod_pessoa as number,
        descricao: formCreateCartao.value.descricao,
        dia_fechamento: formCreateCartao.value.dia_fechamento,
        dia_vencimento: formCreateCartao.value.dia_vencimento,
        limite: formCreateCartao.value.limite,
        tipo: "credito",
      }),
    {
      onSuccess() {
        formCreateCartao.reset();
        handleOpenPostCartaoModal();
        handleGetCartoes();
      },
    }
  );

  const putCartaoAction = useAct(
    () =>
      services.cartao.putCartao({
        cod_cartao: formEditCartao.value.cod_cartao,
        bandeira: formEditCartao.value.bandeira,
        cod_pessoa: formEditCartao.value.cod_pessoa,
        descricao: formEditCartao.value.descricao,
        dia_fechamento: formEditCartao.value.dia_fechamento,
        dia_vencimento: formEditCartao.value.dia_vencimento,
        limite: formEditCartao.value.limite,
        tipo: "credito",
      }),
    {
      onSuccess() {
        formEditCartao.reset();
        handleEditCartaoModal;
        handleGetCartoes();
      },
    }
  );

  const deleteCartaoAction = useAct(
    () => services.cartao.deleteCartao({ idCartao: selectedCard as number }),
    {
      onSuccess() {
        handleDeleteCartaoModal();
        handleGetCartoes();
      },
    }
  );

  const getTransacaoAction = useAct(
    () => services.transacao.getTransacao({ cod_pessoa: 44365 }),
    {
      onSuccess(response) {
        setTransacoes(response.results.data);
      },
    }
  );

  const postDespesaCartaoAction = useAct(
    () =>
      services.transacao.postTransacao({
        cod_pessoa: user?.cod_pessoa as number,
        tipo: TipoTransacao.despesa,
        cod_cartao: selectedCard as number,
        conta: null,
        data: formCreateDespesaCartao.value.data,
        despesaFixa: formCreateDespesaCartao.value.despesaFixa,
        nomeTransacao: formCreateDespesaCartao.value.nomeTransacao,
        valor: formCreateDespesaCartao.value.valor,
        metodo_pagamento: "credito",
      }),
    {
      onSuccess() {
        formCreateDespesaCartao.reset();
        handleOpenModalNewDespesa();
        handleGetCartoes();
      },
    }
  );

  const handleGetCartoes = () => {
    getCartaoAction();
  };

  const handleOpenModalNewDespesa = () => {
    formCreateDespesaCartao.reset();
    setModalNewDespesaIsOpen(!modalNewDespesaIsOpen);
  };

  const handleSetOnRef = (
    event: React.MouseEvent<HTMLElement>,
    cardId: number
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedCard(cardId);
  };

  const handleRefOnClose = () => {
    setAnchorEl(null);
    setSelectedCard(null);
  };

  const handleOpenPostCartaoModal = () => {
    setPostCartaoModalIsOpen(!postCartaoModalIsOpen);
  };

  const handleDeleteCartaoModal = () => {
    setDeleteCartaoModalIsOpen(!deleteCartaoModalIsOpen);
  };

  const handleEditCartaoModal = () => {
    setEditCartaoModalIsOpen(!editCartaoModalIsOpen);
  };

  const handlePostCartao = () => {
    postCartaoAction();
  };

  const handlePutCartao = () => {
    putCartaoAction();
  };

  const handleDeleteCartao = () => {
    deleteCartaoAction();
  };

  const handlePostDespesaCartao = () => {
    postDespesaCartaoAction();
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
    getTransacaoAction();
  }, []);

  return {
    cartoesList,
    deleteCartaoModalIsOpen,
    editCartaoModalIsOpen,
    getCartaoAction,
    putCartaoAction,
    formCreateDespesaCartao,
    formCreateCartao,
    modalNewDespesaIsOpen,
    postCartaoModalIsOpen,
    handleGetCartoes,
    handleOpenModalNewDespesa,
    handleSetOnRef,
    modalStyle,
    selectedCard,
    anchorEl,
    handleRefOnClose,
    handleOpenPostCartaoModal,
    handleDeleteCartaoModal,
    handleEditCartaoModal,
    handlePostCartao,
    handlePutCartao,
    handleDeleteCartao,
    handlePostDespesaCartao,
    postCartaoAction,
    deleteCartaoAction,
    postDespesaCartaoAction,
  };
}
