import { Action } from "@/providers";
import { getTransacaoResponse } from "@/services/cadastro/transacao/types";
import { Box, Button, Grid, Skeleton, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { parseISO } from "date-fns";
import Link from "next/link";
interface HomeUltimasTransacoesProps {
  transacoes: getTransacaoResponse[];
  actionTransacoes: Action;
}

export default function HomeUltimasTransacoes({
  transacoes,
  actionTransacoes,
}: HomeUltimasTransacoesProps) {
  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="200px"
        m={2}
      >
        <Typography variant="h5">Extrato (últimas movimentações)</Typography>
        <Link href="/financeiro/extrato">
          <Button variant="contained">Extrato completo</Button>
        </Link>
      </Stack>
      <CardContent>
        {actionTransacoes.loading ? (
          <Grid spacing={2}>
            <Skeleton variant="rectangular" animation="wave" />
          </Grid>
        ) : transacoes.length > 0 ? (
          <Stack direction="column" justifyContent="space-between" spacing={2}>
            {transacoes.map((transacao, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  maxWidth: "800px",
                }}
              >
                <Typography variant="body1" sx={{ flex: 1 }}>
                  {parseISO(transacao.data).toLocaleString()}
                </Typography>
                <Typography variant="body1" sx={{ flex: 2 }}>
                  {transacao.nomeTransacao}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ flex: 1, textAlign: "right" }}
                >
                  {`${transacao.tipoTransacao == 1 ? `R$ ` : `- R$ `}:${
                    transacao.valor
                  }`}
                </Typography>
              </Box>
            ))}
          </Stack>
        ) : (
          <p>Nenhuma transação disponível</p>
        )}
      </CardContent>
    </Card>
  );
}
