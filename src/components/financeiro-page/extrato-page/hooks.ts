import { useAuth } from "@/auth";
import { useAct, useForm, useService } from "@/providers";
import { TransacaoService } from "@/services/cadastro/transacao";
import { getTransacaoResponse } from "@/services/cadastro/transacao/types";

import React from "react";

export default function useExtratoController() {
  const { user } = useAuth();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [transacoes, setTransacoes] = React.useState<getTransacaoResponse[]>(
    []
  );
  const [selectedTransacao, setSelectedTransacao] = React.useState<
    null | string
  >(null);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const [transacoesFiltered, setTransacoesFiltered] = React.useState<
    getTransacaoResponse[]
  >([]);

  const [deleteTransacaoModalIsOpen, setDeleteTransacaoModalIsOpen] =
    React.useState<boolean>(false);

  const formParams = useForm(
    {
      tipo: 0,
      palavraChave: "",
    },
    (f) => !!f.tipo && !!f.palavraChave
  );

  const services = useService(() => ({
    transacoes: new TransacaoService(),
  }));

  const getTransacoesAction = useAct(
    () =>
      services.transacoes.getTransacao({
        cod_pessoa: user?.cod_pessoa as number,
      }),

    {
      onSuccess(response: any) {
        setTransacoes(response.results.data);
      },
    }
  );

  const deleteTransacaoAction = useAct(
    () =>
      services.transacoes.deleteTransacao({
        idTransacao: selectedTransacao as string,
      }),
    {
      onSuccess() {
        handleDeleteTransacaoModal();
        handleGetTransacoes();
      },
    }
  );

  const handleSetOnRef = (
    event: React.MouseEvent<HTMLElement>,
    transacaoID: string
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedTransacao(transacaoID);
  };

  const handleRefOnClose = () => {
    setAnchorEl(null);
    setSelectedTransacao(null);
  };

  const handleDeleteTransacaoModal = () => {
    setDeleteTransacaoModalIsOpen(!deleteTransacaoModalIsOpen);
  };

  const handleFilter = React.useCallback(() => {
    if (formParams.isValid) {
      const transacoesFiltered = transacoes.filter(
        (item) => item.nomeTransacao == formParams.value.palavraChave
      );
      setTransacoesFiltered(transacoesFiltered);
    }
  }, []);

  const handleDeleteTransacao = () => {
    deleteTransacaoAction();
  };

  const handleGetTransacoes = () => {
    getTransacoesAction();
  };

  React.useEffect(() => {
    getTransacoesAction();
  }, []);

  return {
    transacoes,
    getTransacoesAction,
    deleteTransacaoAction,
    handleGetTransacoes,
    transacoesFiltered,
    selectedTransacao,
    deleteTransacaoModalIsOpen,
    formParams,
    anchorEl,
    handleFilter,
    handleSetOnRef,
    handleRefOnClose,
    handleDeleteTransacaoModal,
    handleDeleteTransacao,
  };
}
