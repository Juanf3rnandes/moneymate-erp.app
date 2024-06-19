import ContasActionButtons from "@/components/financeiro-page/contas-page/contas-page-action-buttons";
import ContasPageList from "@/components/financeiro-page/contas-page/contas-page-list";
import ContasPageNewContaModal from "@/components/financeiro-page/contas-page/contas-page-new-conta-modal";
import useContasController from "@/components/financeiro-page/contas-page/hooks";
import { Grid } from "@mui/material";

export default function Contas() {
  const {
    contasList,
    postContaAction,
    handleNewContaModal,
    formNewConta,
    handlePostConta,
    modalNewContaIsOpen,
  } = useContasController();

  return (
    <>
      <title>Financeiros | Contas</title>
      <Grid container>
        <ContasActionButtons onHandleNewConta={handleNewContaModal} />
        <Grid item>
          <ContasPageList contas={contasList} />
        </Grid>
      </Grid>

      {modalNewContaIsOpen && (
        <ContasPageNewContaModal
          open={modalNewContaIsOpen}
          onClose={handleNewContaModal}
          formCreateConta={formNewConta}
          onSave={handlePostConta}
          postContaAction={postContaAction}
        />
      )}
    </>
  );
}
