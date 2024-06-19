import ContasActionButtons from "@/components/financeiro-page/contas-page/contas-page-action-buttons";
import ContasPageList from "@/components/financeiro-page/contas-page/contas-page-list";
import ContasPageNewContaModal from "@/components/financeiro-page/contas-page/contas-page-new-conta-modal";
import ContaTransacoesTable from "@/components/financeiro-page/contas-page/contas-page-transacoes-table";
import useContasController from "@/components/financeiro-page/contas-page/hooks";
import useExtratoController from "@/components/financeiro-page/extrato-page/hooks";
import { Box, Breadcrumbs, Grid, Link, Typography } from "@mui/material";

export default function Contas() {
  const {
    contasList,
    postContaAction,
    handleNewContaModal,
    formNewConta,
    handlePostConta,
    modalNewContaIsOpen,
  } = useContasController();

  const { transacoes } = useExtratoController();

  return (
    <>
      <title>Financeiros | Contas</title>
      <Box p={4}>
        <Grid container m={2}>
          <Breadcrumbs aria-label="breadcrumb" separator="-">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit">
              Financeiro
            </Link>

            <Typography color="text.primary">Contas</Typography>
          </Breadcrumbs>

          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <ContasPageList contas={contasList} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} md={4}>
          <ContaTransacoesTable contas={contasList} transacoes={transacoes} />
        </Grid>
      </Box>

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
