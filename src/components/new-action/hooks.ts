import React from "react";
import { useForm } from "@/providers/shared/form";
import { useAct, useService } from "@/providers";
import ReceitasService from "@/services/cadastro/receitas";
import { postDespesaCartaoRequest } from "@/services/cadastro/cartao/types";
import {
  TipoTransacao,
  postTransacaoRequest,
} from "@/services/cadastro/transacao/types";
import { TransacaoService } from "@/services/cadastro/transacao";

export default function useNewActionController() {
  const [newReceitaModalmodalOpened, setModalOpened] = React.useState(false);
  const [newDespesaModalmodalOpened, setDespesaModalOpened] =
    React.useState(false);
  const [newDespesaCartaoOpened, setNewDespesaCartaoOpened] =
    React.useState<boolean>(false);

  const [newTransacaoOpened, setNewTransacaoOpened] =
    React.useState<boolean>(false);

  const newActionService = useService((h) => ({
    receitas: new ReceitasService(h),
    transacao: new TransacaoService(),
  }));

  const addNewReceitaForm = useForm<postTransacaoRequest>(
    {
      valor: 0,
      cod_cartao: null,
      cod_pessoa: 0,
      conta: "",
      data: new Date(),
      despesaFixa: false,
      metodo_pagamento: null,
      nomeTransacao: "",
      tipo: TipoTransacao.none,
    },
    (f) => !!f.cod_pessoa
  );

  const addnewDespesaForm = useForm<postTransacaoRequest>(
    {
      valor: 0,
      cod_cartao: null,
      cod_pessoa: 0,
      conta: "",
      data: new Date(),
      despesaFixa: false,
      metodo_pagamento: null,
      nomeTransacao: "",
      tipo: TipoTransacao.none,
    },
    (f) => !!f.cod_pessoa
  );

  const addDespesaCartaoForm = useForm<postDespesaCartaoRequest>({
    data: new Date(),
    descricao: "",
    numeroParcelas: 0,
    parcelado: false,
    valor: 0,
    valorParcela: 0,
  });

  const addTransacaoForm = useForm<postTransacaoRequest>({
    cod_pessoa: 0,
    conta: "",
    nomeTransacao: "",
    tipo: 1,
    valor: 0,
    data: new Date(),
    cod_cartao: null,
    despesaFixa: false,
    metodo_pagamento: null,
  });

  const postNewReceita = useAct(
    () =>
      newActionService.transacao.postTransacao({
        cod_cartao: addNewReceitaForm.value.cod_cartao,
        cod_pessoa: addNewReceitaForm.value.cod_pessoa,
        conta: addNewReceitaForm.value.conta,
        data: addNewReceitaForm.value.data,
        despesaFixa: addNewReceitaForm.value.despesaFixa,
        metodo_pagamento: addNewReceitaForm.value.metodo_pagamento,
        nomeTransacao: addNewReceitaForm.value.nomeTransacao,
        tipo: TipoTransacao.receita,
        valor: addNewReceitaForm.value.valor,
      }),
    {
      onSuccess() {
        addNewReceitaForm.reset();
        handleOpenModal();
      },
    }
  );

  const postNewDespesa = useAct(
    () =>
      newActionService.transacao.postTransacao({
        cod_cartao: addnewDespesaForm.value.cod_cartao,
        cod_pessoa: addnewDespesaForm.value.cod_pessoa,
        conta: addnewDespesaForm.value.conta,
        data: addnewDespesaForm.value.data,
        despesaFixa: addnewDespesaForm.value.despesaFixa,
        metodo_pagamento: addnewDespesaForm.value.metodo_pagamento,
        nomeTransacao: addnewDespesaForm.value.nomeTransacao,
        tipo: TipoTransacao.despesa,
        valor: addnewDespesaForm.value.valor,
      }),
    {
      onSuccess() {
        addnewDespesaForm.reset();
        handleDespesaModal();
      },
    }
  );

  const postTransacao = useAct(() =>
    newActionService.transacao.postTransacao({
      cod_pessoa: addTransacaoForm.value.cod_pessoa,
      cod_cartao: addTransacaoForm.value.cod_cartao,
      conta: addTransacaoForm.value.conta,
      data: addTransacaoForm.value.data,
      despesaFixa: addTransacaoForm.value.despesaFixa,
      nomeTransacao: addTransacaoForm.value.nomeTransacao,
      tipo: addTransacaoForm.value.tipo,
      valor: addTransacaoForm.value.valor,
      metodo_pagamento: addTransacaoForm.value.metodo_pagamento,
    })
  );

  const handlePostNewReceita = () => {
    postNewReceita();
  };

  const handlePostNewDespesa = () => {
    postNewDespesa();
  };
  const handlePostNewTransacao = () => {
    postTransacao();
  };

  const handleOpenModal = () => {
    setModalOpened(!newReceitaModalmodalOpened);
  };

  const handleDespesaModal = () => {
    addnewDespesaForm.reset();
    setDespesaModalOpened(!newDespesaModalmodalOpened);
  };

  const handleDespesaCartaoModal = () => {
    setNewDespesaCartaoOpened(!newDespesaCartaoOpened);
  };

  const handleTransacaoModal = () => {
    setNewTransacaoOpened(!newTransacaoOpened);
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

  return {
    newReceitaModalmodalOpened,
    modalStyle,
    addNewReceitaForm,
    addnewDespesaForm,
    addDespesaCartaoForm,
    addTransacaoForm,
    newDespesaModalmodalOpened,
    newDespesaCartaoOpened,
    newTransacaoOpened,
    handleOpenModal,
    handlePostNewReceita,
    handlePostNewDespesa,
    handlePostNewTransacao,
    handleDespesaCartaoModal,
    handleDespesaModal,
    handleTransacaoModal,
    postNewReceita,
    postNewDespesa,
    postTransacao,
  };
}
