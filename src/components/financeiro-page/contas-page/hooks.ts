import { useAuth } from "@/auth";
import { useAct, useForm, useService } from "@/providers";
import { ContaService } from "@/services/cadastro/contas";
import {
  TipoConta,
  getContasResponse,
  postContasRequest,
} from "@/services/cadastro/contas/types";
import React from "react";

export default function useContasController() {
  const { user } = useAuth();

  const [contasList, setContasList] = React.useState<getContasResponse[]>([]);
  const [modalNewContaIsOpen, setModalNewContaIsOpen] =
    React.useState<boolean>(false);

  const services = useService((h) => ({
    conta: new ContaService(h),
  }));

  const formNewConta = useForm<postContasRequest>(
    {
      cod_pessoa: 0,
      cod_tipo: TipoConta.none,
      descricao: "",
      instituicao: "",
      saldo: 0,
    },
    (f) => !!f.cod_pessoa
  );

  const getContasAction = useAct(
    () => services.conta.getContas({ cod_pessoa: 43658 }),
    {
      onSuccess(response) {
        setContasList(response.results.data);
      },
    }
  );

  const postContaAction = useAct(
    () =>
      services.conta.postConta({
        cod_pessoa: 43658,
        cod_tipo: formNewConta.value.cod_tipo,
        descricao: formNewConta.value.descricao,
        instituicao: formNewConta.value.instituicao,
        saldo: formNewConta.value.saldo,
      }),
    {
      onSuccess() {
        formNewConta.reset();
        handleNewContaModal();
        handleGetContas();
      },
    }
  );

  const handleNewContaModal = () => {
    setModalNewContaIsOpen(!modalNewContaIsOpen);
  };

  const handleGetContas = () => {
    getContasAction();
  };

  const handlePostConta = () => {
    postContaAction();
  };

  React.useEffect(() => {
    handleGetContas();
  }, [user?.cod_pessoa]);

  return {
    contasList,
    formNewConta,
    modalNewContaIsOpen,
    getContasAction,
    postContaAction,
    handleGetContas,
    handlePostConta,
    handleNewContaModal,
  };
}
