import { postNewDespesaRequest } from "@/services/cadastro/despesas/types";
import { postNewReceitaRequest } from "@/services/cadastro/receitas/types";
import React from "react";
import { useForm } from "@/providers/shared/form";
import { useAct } from "@/providers";
import ReceitasService from "@/services/cadastro/receitas";
import { postDespesaCartaoRequest } from "@/services/cadastro/cartao/types";

export default function useNewActionController() {
  const [newReceitaModalmodalOpened, setModalOpened] = React.useState(false);
  const [newDespesaModalmodalOpened, setDespesaModalOpened] =
    React.useState(false);
  const [newDespesaCartaoOpened,setNewDespesaCartaoOpened] = React.useState<boolean>
  (false);

  const receitasService = new ReceitasService();

  const addNewReceitaForm = useForm<postNewReceitaRequest>({
    descricao: "",
    valor: 0,
    data: new Date().toLocaleString(),
    recebida: false,
  });

  const addnewDespesaForm = useForm<postNewDespesaRequest>({
    descricao: "",
    valor: 0,
    data: new Date().toLocaleString(),
    categoria: "",
    paga: false,
  });

  const addDespesaCartaoForm = useForm<postDespesaCartaoRequest>({
    data:new Date(),
    descricao:'',
    numeroParcelas:0,
    parcelado:false,
    valor:0,
    valorParcela:0
  })

  const postNewReceita = useAct(() =>
    receitasService.postReceita(addNewReceitaForm.value)
  );

  const handleOpenModal = () => {
    setModalOpened(!newReceitaModalmodalOpened);
  };

  const handleDespesaModal = () => {
    setDespesaModalOpened(!newDespesaModalmodalOpened);
  };

  const handleDespesaCartaoModal = () => {
    setNewDespesaCartaoOpened(!newDespesaCartaoOpened)
  }

  const modalStyle = {
    position: "absolute" as "absolute",
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
    newDespesaModalmodalOpened,
    newDespesaCartaoOpened,
    handleOpenModal,
    handleDespesaCartaoModal,
    handleDespesaModal,
    postNewReceita,
  };
}
