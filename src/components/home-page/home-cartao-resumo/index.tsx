import { getCartoesResponse } from "@/services/cadastro/types";
import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { LinearProgressWithLabel } from "@/components/financeiro-page/cartoes-page/cartoes-page-list";

interface HomeCartaoResumoProps {
  cartoes: getCartoesResponse[];
}

export default function HomeCartaoResumo({ cartoes }: HomeCartaoResumoProps) {
  const bestCartaoToBuy = React.useCallback(() => {
    if (cartoes.length === 0) return null;

    return cartoes.reduce(
      (bestCartao: getCartoesResponse, currentCartao: getCartoesResponse) => {
        if (
          currentCartao.limite > bestCartao.limite ||
          (currentCartao.limite === bestCartao.limite &&
            currentCartao.dia_fechamento > bestCartao.dia_fechamento)
        ) {
          return currentCartao;
        }
        return bestCartao;
      },
      cartoes[0]
    );
  }, [cartoes]);

  React.useEffect(() => {
    const bestCartao = bestCartaoToBuy();
    console.log("Melhor cartão para comprar:", bestCartao);
  }, [bestCartaoToBuy]);

  const bestCartao = bestCartaoToBuy();

  return (
    <Grid container>
      <Stack>
        {cartoes.length > 0 ? (
          <Grid item xs={12}>
            <Typography variant="h6">
              O melhor cartão para comprar hoje é
            </Typography>
            {bestCartao && (
              <Grid container width="auto" item key={bestCartao.id}>
                <Card sx={{ borderRadius: 5 }}>
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    m={2}
                    gap={2}
                  >
                    <Typography variant="h6">
                      {bestCartao.descricao === ""
                        ? `cartão ${bestCartao.bandeira}`
                        : bestCartao.descricao}
                    </Typography>
                  </Grid>

                  <Stack m={2}>
                    {bestCartao.dia_fechamento > new Date().getDate() ? (
                      <Typography variant="h6">Fatura aberta</Typography>
                    ) : (
                      <Typography variant="body2">Fatura fechada</Typography>
                    )}
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Valor da fatura</Typography>
                      <Typography variant="body2">
                        {bestCartao.fatura
                          ? `R$: ${bestCartao.fatura.toFixed(2)}`
                          : `R$:0,00`}
                        <LinearProgressWithLabel
                          value={bestCartao.fatura ? bestCartao.fatura : 0}
                          maxValue={bestCartao.limite}
                        />
                      </Typography>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <Typography variant="body2">Fecha em</Typography>
                      <Typography variant="body1">{`${
                        bestCartao.dia_fechamento
                      }/${new Date().getMonth() + 1}`}</Typography>
                    </Stack>
                  </Stack>
                  {/* <Stack m={2}>
                      <Typography variant="body2">{`R$:${
                        valorFatura ? valorFatura.toFixed(2) : `0,00`
                      } de R$:${bestCartao.limite.toFixed(2)}`}</Typography>
                      <LinearProgressWithLabel
                        value={valorFatura ? valorFatura : 0}
                        maxValue={cartao.limite}
                      />
                    </Stack> */}
                </Card>
              </Grid>
            )}
          </Grid>
        ) : (
          <Grid container justifyContent="center" alignItems="center">
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
            {cartoes.length > 0 ? "Gerenciar cartões" : " Adicionar cartão"}
          </Link>
        </Button>
      </Stack>
    </Grid>
  );
}
