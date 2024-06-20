import React, { useState, MouseEvent, ChangeEvent } from "react";
import {
  Card,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { getTransacaoResponse } from "@/services/cadastro/transacao/types";
import { parseISO } from "date-fns";

interface ExtratoTransacoesListProps {
  transacoes: getTransacaoResponse[];
  achorEl: null | HTMLElement;
  selectedTransacao: null | string;
  handleRefOnClose: () => void;
  handleSetOnRef: (
    event: React.MouseEvent<HTMLElement>,
    transacaoID: string
  ) => void;
  handleDeleteTransacaoModal: () => void;
  handleEditTransacaoModal: () => void;
}

export default function ExtratoTransacoesList({
  transacoes,
  achorEl,
  selectedTransacao,
  handleRefOnClose,
  handleSetOnRef,
  handleDeleteTransacaoModal,
  handleEditTransacaoModal,
}: ExtratoTransacoesListProps) {
  const open = Boolean(achorEl);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Card>
      <Grid container>
        <TableContainer
          component={Paper}
          sx={{ width: "100%", overflowX: "auto" }}
        >
          <Table
            sx={{ minWidth: 650, border: "1px solid #e0e0e0" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">Data</TableCell>
                <TableCell align="center">Descrição</TableCell>
                <TableCell align="center">Tipo</TableCell>
                <TableCell align="center">Categoria</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center">Ações</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transacoes.length > 0 ? (
                transacoes
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((transacao) => (
                    <TableRow
                      key={transacao.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">
                        {parseISO(transacao.data).toLocaleString()}
                      </TableCell>
                      <TableCell align="center">
                        {transacao.nomeTransacao}
                      </TableCell>
                      <TableCell align="center">
                        {transacao.tipoTransacao == 1 ? "Receita" : "Despesa"}
                      </TableCell>
                      <TableCell align="center">
                        {transacao.nomeTransacao}
                      </TableCell>
                      <TableCell align="center">
                        {`R$ ${transacao.valor.toFixed(2)}`}
                      </TableCell>
                      <TableCell align="center">
                        <Grid item m={1}>
                          <IconButton
                            aria-controls="long-menu"
                            aria-haspopup="true"
                            onClick={(event) =>
                              handleSetOnRef(event, transacao.id)
                            }
                          >
                            <MoreHorizIcon />
                          </IconButton>
                        </Grid>
                        <Menu
                          id="transacoes-page-table-action"
                          anchorEl={achorEl}
                          open={open && selectedTransacao === transacao.id}
                          onClose={handleRefOnClose}
                        >
                          <MenuItem onClick={handleEditTransacaoModal}>
                            Editar
                          </MenuItem>
                          <MenuItem onClick={handleDeleteTransacaoModal}>
                            Excluir
                          </MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <Grid container justifyContent="center"></Grid>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transacoes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Card>
  );
}
