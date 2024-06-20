import { getContasResponse } from "@/services/cadastro/contas/types";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

interface HomeContasResumoProps {
  contas: getContasResponse[];
}

export default function HomeContasResumo({ contas }: HomeContasResumoProps) {
  const contasEmVermelho = React.useCallback(() => {
    return contas.filter((conta) => conta.saldo < 0);
  }, []);

  return (
    <Box>
      <Grid>
        <Card>
          {contasEmVermelho.length > 0 ? (
            <Grid item xs={12} gap={2}>
              <Typography>Você possui contas no vermelho!</Typography>
              <Button>Gerenciar Contas</Button>
            </Grid>
          ) : (
            <Grid item xs={12} gap={2}>
              <Typography> Parabéns, Suas Contas estão em ordem!</Typography>
              <Button>Gerenciar Contas</Button>
            </Grid>
          )}
        </Card>
      </Grid>
    </Box>
  );
}
