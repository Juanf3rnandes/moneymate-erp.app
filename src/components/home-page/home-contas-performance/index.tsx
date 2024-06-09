import { Card, Grid, Link, Stack, Typography } from "@mui/material";
import SpeedIcon from "@mui/icons-material/Speed";

export default function HomeContasPerformance() {
  return (
    <Grid>
      <Stack direction="row" gap={1}>
        <SpeedIcon />
        <Typography variant="h5">Performance das suas contas</Typography>
      </Stack>

      <Card sx={{ cursor: "pointer" }}>
        <Grid>
          <Stack>
            <Typography variant="body1">
              Acompanhe a evolução das Despesas, Receitas, Contas de Consumo e
              Investimentos
            </Typography>
            <Link>Clique para acessar os gráficos</Link>
          </Stack>
        </Grid>
      </Card>
    </Grid>
  );
}
