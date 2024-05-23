import useFinanceiroController from "@/components/financeiro-page/cartoes-page/hooks";
import CartoesList from "@/components/financeiro-page/cartoes-page/cartoes-list/index";
import DefaultLayout from "@/layouts/default";
import { Box, Grid, Stack, Typography } from "@mui/material";
import CartoesOptionsField from "@/components/financeiro-page/cartoes-page/cartoes-options-field";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AddNewDespesaCartaoModal from "@/components/financeiro-page/cartoes-page/add-new-despesa-cartao-modal";

export default function Cartoes() {
  const { cartoesList, handleOpenModalNewDespesa, modalNewDespesaIsOpen } =
    useFinanceiroController();

  return (
    <>
      <DefaultLayout userName="John Doe" />
      <Grid container m={2}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit">
            Financeiro
          </Link>
          <Typography color="text.primary">Cartões de crédito</Typography>
        </Breadcrumbs>
        <Grid container justifyContent="center" alignItems="center" m={5}>
          <Stack>
            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5">Cartoes de crédito</Typography>
                <CartoesOptionsField />
              </Stack>
            </Box>
            <Box>
              <CartoesList
                cartoes={cartoesList}
                valorFatura={2}
                openAddNewDespesaModal={handleOpenModalNewDespesa}
              />
            </Box>
          </Stack>
        </Grid>
        <AddNewDespesaCartaoModal
          opened={modalNewDespesaIsOpen}
          handleClose={handleOpenModalNewDespesa}
        />
      </Grid>
    </>
  );
}
