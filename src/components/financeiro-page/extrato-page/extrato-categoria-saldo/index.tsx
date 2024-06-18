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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const saldoStyled = {
    borderRadius: "40%",
    minHeight: 100,
    minWidth: 350,
  };

  return (
    <Grid>
      <Stack gap={3}>
        <Stack>
          <Card>
            <Stack>
              <Breadcrumbs separator=">" aria-label="breadcrumb">
                <Typography color="text.primary">Saldo</Typography>
              </Breadcrumbs>
              <Typography variant="body1">{`R$ ${valorReceitas}`}</Typography>
            </Stack>
          </Card>
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
