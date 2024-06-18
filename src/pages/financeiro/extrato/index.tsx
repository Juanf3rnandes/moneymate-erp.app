import ExtratoActionsButton from "@/components/financeiro-page/extrato-page/extrato-actions-button";
import ExtratoDeleteTransacaoModal from "@/components/financeiro-page/extrato-page/extrato-delete-transacao-modal";
import ExtratoTransacoesList from "@/components/financeiro-page/extrato-page/extrato-transacoes-list";
import useExtratoController from "@/components/financeiro-page/extrato-page/hooks";
import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";

export default function Extrato() {
  const {
    selectedTransacao,
    transacoes,
    deleteTransacaoModalIsOpen,
    anchorEl,
    handleRefOnClose,
    handleSetOnRef,
    handleDeleteTransacaoModal,
    handleDeleteTransacao,
    deleteTransacaoAction,
  } = useExtratoController();

  return (
    <>
      <title>Financeiro - Extrato </title>
      <Grid>
        <Grid container display="flex" justifyContent="space-between">
          <Breadcrumbs separator="-" aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit">
              Financeiro
            </Link>
            <Typography color="text.primary">Extrato</Typography>
          </Breadcrumbs>
        </Grid>
        <ExtratoActionsButton />
        <Grid xs={8} md={4}>
          <Grid item>
            <ExtratoTransacoesList
              transacoes={transacoes}
              selectedTransacao={selectedTransacao}
              achorEl={anchorEl}
              handleSetOnRef={handleSetOnRef}
              handleRefOnClose={handleRefOnClose}
              handleDeleteTransacaoModal={handleDeleteTransacaoModal}
            />
          </Grid>
        </Grid>
      </Grid>
      {deleteTransacaoModalIsOpen && (
        <ExtratoDeleteTransacaoModal
          deleteTransacaoAction={deleteTransacaoAction}
          open={deleteTransacaoModalIsOpen}
          onSave={handleDeleteTransacao}
          onClose={handleDeleteTransacaoModal}
        />
      )}
    </>
  );
}
