import useFinanceiroController from "@/components/financeiro-page/cartoes-page/hooks";
import CartoesList from "@/components/financeiro-page/cartoes-page/cartoes-page-list/index";
import { Box, Grid, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import AddNewDespesaCartaoModal from "@/components/financeiro-page/cartoes-page/add-new-despesa-cartao-modal";
import CartaoDeleteModal from "@/components/financeiro-page/cartoes-page/cartoes-page-delete-cartao-modal";
import CartaoEditModal from "@/components/financeiro-page/cartoes-page/cartoes-page-edit-cartao-modal";
import CartoesOptionsField from "@/components/financeiro-page/cartoes-page/cartoes-page-options-field";
import NewCartaoModal from "@/components/financeiro-page/cartoes-page/cartoes-page-new-cartao-modal";
import CartaoComprasTable from "@/components/financeiro-page/cartoes-page/cartoes-page-compras-table";
import useExtratoController from "@/components/financeiro-page/extrato-page/hooks";

export default function Cartoes() {
  const {
    cartoesList,
    formCreateDespesaCartao,
    formCreateCartao,
    handleOpenModalNewDespesa,
    modalNewDespesaIsOpen,
    modalStyle,
    anchorEl,
    handleSetOnRef,
    handleRefOnClose,
    selectedCard,
    putCartaoAction,
    postCartaoModalIsOpen,
    deleteCartaoModalIsOpen,
    editCartaoModalIsOpen,
    handleOpenPostCartaoModal,
    handleDeleteCartaoModal,
    handlePostCartao,
    handlePutCartao,
    handleDeleteCartao,
    handlePostDespesaCartao,
    handleEditCartaoModal,
    postCartaoAction,
    deleteCartaoAction,
    postDespesaCartaoAction,
  } = useFinanceiroController();

  const { transacoes } = useExtratoController();

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

          <Grid container justifyContent="center" alignItems="center">
            <CartoesOptionsField
              openToCreateCartaoModal={handleOpenPostCartaoModal}
            />

            <Grid item>
              <CartoesList
                anchorEl={anchorEl}
                handleSetOnRef={handleSetOnRef}
                selectedCard={selectedCard}
                cartoes={cartoesList}
                valorFatura={500}
                openAddNewDespesaModal={handleOpenModalNewDespesa}
                handleRefOnClose={handleRefOnClose}
                handleDeleteModal={handleDeleteCartaoModal}
                handleEditModal={handleEditCartaoModal}
              />
            </Grid>
          </Grid>
          <AddNewDespesaCartaoModal
            opened={modalNewDespesaIsOpen}
            formNewDespesaCartao={formCreateDespesaCartao}
            handleClose={handleOpenModalNewDespesa}
            configModal={modalStyle}
            onSave={handlePostDespesaCartao}
            postDespesaAction={postDespesaCartaoAction}
          />
        </Grid>
        <Grid item xs={8} md={4}>
          <CartaoComprasTable cartoes={cartoesList} compras={transacoes} />
        </Grid>
        {deleteCartaoModalIsOpen && (
          <CartaoDeleteModal
            open={deleteCartaoModalIsOpen}
            onClose={handleDeleteCartaoModal}
            deleteAction={deleteCartaoAction}
            configModal={modalStyle}
            onDelete={handleDeleteCartao}
          />
        )}

        {editCartaoModalIsOpen && (
          <CartaoEditModal
            open={editCartaoModalIsOpen}
            onClose={handleEditCartaoModal}
            onEdit={handlePutCartao}
            editAction={putCartaoAction}
          />
        )}

        {postCartaoModalIsOpen && (
          <NewCartaoModal
            open={postCartaoModalIsOpen}
            onSave={handlePostCartao}
            onClose={handleOpenPostCartaoModal}
            postCartaoAction={postCartaoAction}
            form={formCreateCartao}
          />
        )}
      </Box>
    </>
  );
}
