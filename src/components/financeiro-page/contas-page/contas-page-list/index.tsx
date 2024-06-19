import { getContasResponse } from "@/services/cadastro/contas/types";
import {
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

interface ContasPageListProps {
  contas: getContasResponse[];
}
export default function ContasPageList({ contas }: ContasPageListProps) {
  return (
    <Grid container>
      {contas.length == 0 ? (
        <Typography variant="h6">Nenhuma conta cadastrada!</Typography>
      ) : (
        contas.map((conta) => (
          <Grid container width="auto" item key={conta.id}>
            <Card sx={{ borderRadius: 5 }}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                m={2}
                gap={2}
              >
                <Typography variant="h6">{conta.descricao}</Typography>

                <Grid item m={1}>
                  <IconButton
                    aria-controls="long-menu"
                    aria-haspopup="true"
                  ></IconButton>
                </Grid>
              </Grid>
              <Stack m={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Saldo</Typography>
                  <Typography variant="body2">{`R$: ${conta.saldo.toFixed(
                    2
                  )}`}</Typography>
                </Stack>
              </Stack>

              <Stack m={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Instituição</Typography>
                  <Typography variant="body2">{conta.instituicao}</Typography>
                </Stack>
              </Stack>

              <Stack m={2}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Status</Typography>
                  <Typography
                    variant="body2"
                    color={conta.saldo > 0 ? "green" : "red"}
                  >
                    {conta.saldo < 0 ? "Negativo" : "Positivo"}
                  </Typography>
                </Stack>
              </Stack>

              <Divider />
              <Button>Adicionar Despesa</Button>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}
