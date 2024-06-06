import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dotenv from "dotenv";
import {
  Box,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoveUpIcon from "@mui/icons-material/MoveUp";
import NewActionFloatButton from "@/components/new-action/new-action-float-button/inde";
import useNewActionController from "@/components/new-action/hooks";
import NewReceitaModal from "@/components/new-action/new-action-modal/new-receita-modal";
import NewDespesaModal from "@/components/new-action/new-action-modal/new-despesa-modal";
import NewDespesaCartaoModal from "@/components/new-action/new-action-modal/new-despesa-cartao-modal";
import NewTransacaoModal from "@/components/new-action/new-action-modal/new-transacao-modal";

dotenv.config();

export default function App({ Component, pageProps }: AppProps) {
  const {
    handleOpenModal,
    handlePostNewReceita,
    handleDespesaModal,
    handleDespesaCartaoModal,
    handleTransacaoModal,
    newReceitaModalmodalOpened,
    newDespesaModalmodalOpened,
    newDespesaCartaoOpened,
    newTransacaoOpened,
    modalStyle,
    addNewReceitaForm,
    addnewDespesaForm,
    addDespesaCartaoForm,
    addTransacaoForm,
    postNewReceita,
  } = useNewActionController();

  return (
    <>
      <Component {...pageProps} />
      <NewActionFloatButton
        handleOpenNewReceita={handleOpenModal}
        handleOpenNewDespesa={handleDespesaModal}
        handleOpenNewDespesaCartao={handleDespesaCartaoModal}
        handleOpenNewTransacao={handleTransacaoModal}
      />

      {newReceitaModalmodalOpened && (
        <NewReceitaModal
          postNewReceita={postNewReceita}
          formAddReceita={addNewReceitaForm}
          opened={newReceitaModalmodalOpened}
          handleModal={handleOpenModal}
          onSave={handlePostNewReceita}
          style={modalStyle}
        />
      )}

      {newDespesaModalmodalOpened && (
        <NewDespesaModal
          opened={newDespesaModalmodalOpened}
          addNewDespesaForm={addnewDespesaForm}
          handleModal={handleDespesaModal}
          style={modalStyle}
        />
      )}

      {newDespesaCartaoOpened && (
        <NewDespesaCartaoModal
          addNewDespesaCartaoForm={addDespesaCartaoForm}
          handleModal={handleDespesaCartaoModal}
          opened={newDespesaCartaoOpened}
          style={modalStyle}
        />
      )}
      {NewTransacaoModal && (
        <NewTransacaoModal
          opened={newTransacaoOpened}
          form={addTransacaoForm}
          handleModal={handleTransacaoModal}
          style={modalStyle}
        />
      )}
    </>
  );
}
