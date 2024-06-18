import React from "react";
import {
  getCartaoResponse,
  postCartaoRequest,
} from "@/services/cadastro/cartao/types";
import { useAct, useForm, useService } from "@/providers";
import {
  TipoTransacao,
  getTransacaoResponse,
  postTransacaoRequest,
} from "@/services/cadastro/transacao/types";
import { CartaoService } from "@/services/cadastro/cartao";
import { TransacaoService } from "@/services/cadastro/transacao";

export default function useFinanceiroController() {
  const [modalNewDespesaIsOpen, setModalNewDespesaIsOpen] =
    React.useState<boolean>(false);

  const [cartoesList, setCartoesList] = React.useState<getCartaoResponse[]>([]);
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
      tipo: TipoTransacao.despesa,
      valor: 0,
      cod_cartao: 0,
      despesaFixa: false,
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

  const getCartaoAction = useAct(
    () => services.cartao.getCartao({ cod_pessoa: 44365 }),
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
        cod_pessoa: 44365,
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

  const handleGetCartoes = () => {
    getCartaoAction();
  };

  const handleOpenModalNewDespesa = () => {
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

  const handleDeleteCartao = () => {
    deleteCartaoAction();
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
    handleDeleteCartao,
    postCartaoAction,
    deleteCartaoAction,
  };
}
