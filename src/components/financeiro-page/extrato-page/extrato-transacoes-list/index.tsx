import { getTransacoesResponse } from "@/services/cadastro/types";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import emptyImage from "../../../../../public/assets/imgs/transacoes-empty.svg";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface ExtratoTransacoesListProps {
  transacoes: getTransacoesResponse[];
}

export default function ExtratoTransacoesList({
  transacoes,
}: ExtratoTransacoesListProps) {
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
                transacoes.map((transacao) => (
                  <TableRow
                    key={transacao.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">
                      {transacao.data.toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      {transacao.tituloTransacao}
                    </TableCell>
                    <TableCell align="center">{transacao.tipo}</TableCell>
                    <TableCell align="center">{transacao.tipo}</TableCell>
                    <TableCell align="center">
                      {`R$ ${transacao.valor.toFixed(2)}`}
                    </TableCell>
                    <TableCell align="center">
                      <Button>
                        <MoreHorizIcon />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Grid container justifyContent="center">
                      <Stack justifyContent="center" alignItems="center">
                        <Image
                          src={emptyImage}
                          alt=""
                          width={200}
                          height={200}
                        />
                        <Typography>Nenhum resultado</Typography>
                      </Stack>
                    </Grid>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Card>
  );
}
