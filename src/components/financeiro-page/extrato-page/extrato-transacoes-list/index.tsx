import { getTransacoesResponse } from "@/services/cadastro/types";
import { Card, Grid, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import emptyImage from "../../../../../public/assets/imgs/transacoes-empty.svg";

interface ExtratoTransacoesListProps {
  transacoes: getTransacoesResponse[];
}

export default function ExtratoTransacoesList({
  transacoes,
}: ExtratoTransacoesListProps) {
  return (
    <Card>
      <Grid container>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Data</TableCell>
                <TableCell align="center">Descrição</TableCell>
                <TableCell align="center">Categoria</TableCell>
                <TableCell align="center">Valor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transacoes.length > 0 ? (
                transacoes.map((transacao) => (
                  <TableRow
                    key={transacao.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {transacao.data.toLocaleDateString()}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {transacao.tituloTransacao}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {transacao.tipo}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {`R$ ${transacao.valor.toFixed(2)}`}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <Grid container justifyContent="center">
                  <Stack justifyContent="center" alignItems="center">
                    <Image src={emptyImage} alt="" width={200} height={200} />
                    <Typography>Nenhum resultado</Typography>
                  </Stack>
                </Grid>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Card>
  );
}
