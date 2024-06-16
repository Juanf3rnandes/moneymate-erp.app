import useFinanceiroController from "@/components/financeiro-page/cartoes-page/hooks";
import CartoesList from "@/components/financeiro-page/cartoes-page/cartoes-list/index";
import { Box, Grid, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AddNewDespesaCartaoModal from "@/components/financeiro-page/cartoes-page/add-new-despesa-cartao-modal";
import CartoesOptionsField from "@/components/financeiro-page/cartoes-page/cartoes-options-field";

export default function Cartoes() {
  const {
    cartoesList,
    formCreateDespesaCartao,
    handleOpenModalNewDespesa,
    modalNewDespesaIsOpen,
    modalStyle,
  } = useFinanceiroController();

  return (
    <>
      <title>Financeiro | Cartões</title>
      <Box p={4}>
        <Grid container m={2}>
          <Breadcrumbs aria-label="breadcrumb" separator="-">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit">
              Financeiro
            </Link>

            <Typography color="text.primary">Cartões</Typography>
          </Breadcrumbs>

          <Grid container justifyContent="center" alignItems="center" xs={12}>
            <Grid item>
              <CartoesList
                cartoes={cartoesList}
                valorFatura={2}
                openAddNewDespesaModal={handleOpenModalNewDespesa}
              />
            </Grid>
          </Grid>
          <AddNewDespesaCartaoModal
            opened={modalNewDespesaIsOpen}
            formNewDespesaCartao={formCreateDespesaCartao}
            handleClose={handleOpenModalNewDespesa}
            configModal={modalStyle}
          />
        </Grid>
      </Box>
    </>
  );
}
