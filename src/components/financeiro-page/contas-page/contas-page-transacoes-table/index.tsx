import React, { useState, MouseEvent, ChangeEvent } from "react";
import { getTransacaoResponse } from "@/services/cadastro/transacao/types";
import {
  Card,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { parseISO } from "date-fns";

import { getContasResponse } from "@/services/cadastro/contas/types";

interface ContaTransacoesTableProps {
  transacoes: getTransacaoResponse[];
  contas: getContasResponse[];
}

export default function ContaTransacoesTable({
  transacoes,
  contas,
}: ContaTransacoesTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

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
      <Grid container gap={2}>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="cartoes-table-selected">Cartão</InputLabel>
          <Select labelId="cartoes-table-selected" MenuProps={MenuProps}>
            {contas.map((contaItem) => (
              <MenuItem key={contaItem.id} value={contaItem.id}>
                {contaItem.descricao}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
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
                {transacoes.length > 0 ? (
                  transacoes
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((transacao) => (
                      <TableRow
                        key={transacao.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
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
                          <Typography variant="h6" fontFamily="initial">
                            Nenhuma transação para este cartão encontrada!
                          </Typography>
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
            count={transacoes.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </Card>
  );
}
