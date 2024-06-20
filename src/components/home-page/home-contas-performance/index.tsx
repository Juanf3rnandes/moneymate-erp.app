import { Box, Card, Grid, Link, Stack, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";

export default function HomeContasPerformance() {
  return (
    <Box p={2}>
      <Grid m={2}>
        <Stack direction="row" gap={1}>
          <SpeedIcon />
          <Typography variant="h5">Performance Financeira</Typography>
        </Stack>

        <Card sx={{ cursor: "pointer" }}>
          <Grid m={2}>
            <Stack>
              <Typography variant="body1">
                Acompanhe a evolução das Despesas, Receitas, Contas de Consumo e
                Investimentos
              </Typography>
              <Link href="/financeiro/graficos">
                Clique para acessar os gráficos
              </Link>
            </Stack>
          </Grid>
        </Card>
      </Grid>
    </Box>
  );
}
