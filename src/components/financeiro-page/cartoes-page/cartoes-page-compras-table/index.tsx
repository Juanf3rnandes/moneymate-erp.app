import React, { useState, MouseEvent, ChangeEvent } from "react";
import { getTransacaoResponse } from "@/services/cadastro/transacao/types";
import {
  Button,
  Card,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { parseISO } from "date-fns";

interface CartaoComprasTableProps {
  compras: getTransacaoResponse[];
}

export default function CartaoComprasTable({
  compras,
}: CartaoComprasTableProps) {
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
              </TableRow>
            </TableHead>
            <TableBody>
              {compras.length > 0 ? (
                compras
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
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Typography fontFamily="initial">
                          Nenhuma transação para este cartão encontrada!
                        </Typography>
                        <Button>Cadastrar uma nova compra</Button>
                      </Grid>
                    </Grid>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={compras.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Grid>
    </Card>
  );
}
