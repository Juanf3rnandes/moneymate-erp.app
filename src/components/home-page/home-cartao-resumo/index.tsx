import { getCartoesResponse } from "@/services/cadastro/types";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

interface HomeCartaoResumoProps {
  cartoes: getCartoesResponse[];
}

export default function HomeCartaoResumo({ cartoes }: HomeCartaoResumoProps) {
  return (
    <Grid container>
      <Stack>
        {cartoes.length > 0 ? (
          <Stack></Stack>
        ) : (
          <Grid container justifyContent="center" alignContent="center">
            <Typography variant="h6">
              Opa! Você ainda não possui cartões de crédito cadastrados.
            </Typography>
          </Grid>
        )}
        <Button color="primary">
          <Link
            href="/financeiro/cartoes"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Adicionar cartão
          </Link>
        </Button>
      </Stack>
    </Grid>
  );
}
