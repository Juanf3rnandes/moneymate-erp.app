import { getTransacoesResponse } from "@/services/cadastro/types";
import { Box, Button, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { compareAsc, format } from "date-fns";

interface HomeUltimasTransacoesProps {
  transacoes: getTransacoesResponse[];
}

export default function HomeUltimasTransacoes({
  transacoes,
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
        <Button variant="contained">Extrato completo</Button>
      </Stack>
      <CardContent>
        {transacoes.length > 0 ? (
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
                  {transacao.data.toLocaleString().split(" ")[0]}
                </Typography>
                <Typography variant="body1" sx={{ flex: 2 }}>
                  {transacao.tituloTransacao}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ flex: 1, textAlign: "right" }}
                >
                  {`R$:${transacao.valor}`}
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
