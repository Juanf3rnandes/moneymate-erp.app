import React from "react";
import { getCartoesResponse } from "@/services/cadastro/types";
import {
  Box,
  Button,
  Card,
  Grid,
  Stack,
  Typography,
  Divider,
} from "@mui/material";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface CartoesListProps {
  cartoes: getCartoesResponse[];
  openAddNewDespesaModal: () => void;
  valorFatura?: number;
}

export default function CartoesList({
  cartoes,
  valorFatura,
  openAddNewDespesaModal,
}: CartoesListProps) {
  const LinearProgressWithLabel = (
    props: LinearProgressProps & { value: number; comparisonValue: number }
  ) => {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            (props.value / props.comparisonValue) * 100
          )}%`}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Grid container spacing={2}>
      {cartoes.length < 1 ? (
        <Typography variant="h6">Não há cartões disponíveis</Typography>
      ) : (
        cartoes.map((cartao) => (
          <Grid item xs={12} key={cartao.id}>
            <Card sx={{ borderRadius: 5 }}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                m={2}
                gap={2}
              >
                <Typography variant="h6">{cartao.descricao}</Typography>
                <Button>
                  <MoreVertIcon />
                </Button>
              </Grid>

              <Stack m={2}>
                {cartao.diaFechamento > new Date().getDay() ? (
                  <Typography variant="h6">Fatura aberta</Typography>
                ) : (
                  <Typography variant="body2">Fatura fechada</Typography>
                )}
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Valor da fatura</Typography>
                  <Typography variant="body2">
                    {valorFatura ? `R$: ${valorFatura}` : `R$:0,00`}
                  </Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-between">
                  <Typography variant="body2">Fecha em </Typography>
                  <Typography variant="body1">{`${
                    cartao.diaFechamento
                  }/${new Date().getMonth().toLocaleString()}`}</Typography>
                </Stack>
              </Stack>
              <Stack m={2}>
                <Typography variant="body2">{`R$:${
                  valorFatura ? valorFatura : `0,00`
                } de R$:${cartao.limite}`}</Typography>
                <LinearProgressWithLabel
                  value={valorFatura ? valorFatura : 0}
                  comparisonValue={cartao.limite}
                />
              </Stack>
              <Divider />
              <Button color="inherit" onClick={openAddNewDespesaModal}>
                Adicionar Despesa
              </Button>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}
