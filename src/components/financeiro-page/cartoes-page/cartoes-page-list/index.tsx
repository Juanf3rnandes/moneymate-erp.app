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
  MenuItem,
  Menu,
  IconButton,
} from "@mui/material";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface CartoesListProps {
  cartoes: getCartoesResponse[];
  openAddNewDespesaModal: () => void;
  valorFatura?: number;
  handleSetOnRef: (
    event: React.MouseEvent<HTMLElement>,
    cardID: number
  ) => void;
  handleRefOnClose: () => void;
  handleDeleteModal: () => void;
  handleEditModal: () => void;
  anchorEl: null | HTMLElement;
  selectedCard: null | number;
}

export default function CartoesList({
  cartoes,
  valorFatura,
  openAddNewDespesaModal,
  handleSetOnRef,
  anchorEl,
  selectedCard,
  handleRefOnClose,
  handleDeleteModal,
  handleEditModal,
}: CartoesListProps) {
  const open = Boolean(anchorEl);

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
                <Typography variant="h6">
                  {cartao.descricao === ""
                    ? `cartão ${cartao.bandeira}`
                    : cartao.descricao}
                </Typography>

                <Grid item m={1}>
                  <IconButton
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={(event) => handleSetOnRef(event, cartao.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                </Grid>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  open={open && selectedCard === cartao.id}
                  onClose={handleRefOnClose}
                >
                  <MenuItem onClick={handleEditModal}>Editar</MenuItem>
                  <MenuItem onClick={handleDeleteModal}>Excluir</MenuItem>
                </Menu>
              </Grid>

              <Stack m={2}>
                {cartao.dia_fechamento > new Date().getDay() ? (
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
                  <Typography variant="body2">Fecha em</Typography>
                  <Typography variant="body1">{`${cartao.dia_fechamento}/${
                    new Date().getMonth() + 1
                  }`}</Typography>
                </Stack>
              </Stack>
              <Stack m={2}>
                <Typography variant="body2">{`R$:${
                  valorFatura ? valorFatura : `0,00`
                } de R$:${cartao.limite.toFixed(2)}`}</Typography>
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
