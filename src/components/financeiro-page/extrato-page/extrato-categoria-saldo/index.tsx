import { Breadcrumbs, Card, Grid, Stack, Typography } from "@mui/material";

interface ExtratoCategoriaSaldoProps {
  valorReceitas: number;
  valorDespesas: number;
  valorBalancoMensal: number;
}

export default function ExtratoCategoriaSaldo({
  valorBalancoMensal,
  valorDespesas,
  valorReceitas,
}: ExtratoCategoriaSaldoProps) {
  const saldoStyled = {
    borderRadius: "40%",
    minHeight: 100,
    minWidth: 350,
  };

  return (
    <Grid>
      <Stack gap={3}>
        <Stack>
          <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Typography color="text.primary">Saldo</Typography>
          </Breadcrumbs>
          <Card>{`R$ ${valorReceitas}`}</Card>
        </Stack>
        <Stack>
          <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Typography color="text.primary">Despesa</Typography>
          </Breadcrumbs>
          <Card>{`R$ ${valorDespesas}`}</Card>
        </Stack>
        <Stack>
          <Breadcrumbs separator=">" aria-label="breadcrumb">
            <Typography color="text.primary">Balanço mensal</Typography>
          </Breadcrumbs>
          <Card>{`R$ ${valorBalancoMensal}`}</Card>
        </Stack>
      </Stack>
    </Grid>
  );
}
