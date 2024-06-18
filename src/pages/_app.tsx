import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dotenv from "dotenv";
import NewActionFloatButton from "@/components/new-action/new-action-float-button/inde";
import useNewActionController from "@/components/new-action/hooks";
import NewReceitaModal from "@/components/new-action/new-action-modal/new-receita-modal";
import NewDespesaModal from "@/components/new-action/new-action-modal/new-despesa-modal";
import NewDespesaCartaoModal from "@/components/new-action/new-action-modal/new-despesa-cartao-modal";
import NewTransacaoModal from "@/components/new-action/new-action-modal/new-transacao-modal";
import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";
import PublicLayout from "@/layouts/public";
import { AuthProvider } from "@/auth";
import { authConfig } from "@/auth";

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
    postTransacao,
    addTransacaoForm,
    postNewReceita,
    handlePostNewTransacao
  } = useNewActionController();

  const router = useRouter();

  return (
    <>
      <AuthProvider configs={authConfig}>
        {router.pathname !== "/login" ? (
       <>
          <DefaultLayout userName="teste juan" />
          <NewActionFloatButton
          handleOpenNewReceita={handleOpenModal}
          handleOpenNewDespesa={handleDespesaModal}
          handleOpenNewDespesaCartao={handleDespesaCartaoModal}
          handleOpenNewTransacao={handleTransacaoModal}
        /></>
        ) : (
          <PublicLayout />
        )}
        <Component {...pageProps} />    
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
            onSave={handlePostNewTransacao}
            opened={newTransacaoOpened}
            form={addTransacaoForm}
            handleModal={handleTransacaoModal}
            postNewTransacaoAction={postTransacao}
            style={modalStyle}
          />
        )}
      </AuthProvider>
    </>
  );
}
