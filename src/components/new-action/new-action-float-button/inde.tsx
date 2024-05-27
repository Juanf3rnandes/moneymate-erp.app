import {
  Box,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoveUpIcon from "@mui/icons-material/MoveUp";

interface newActionFloatButtonProps {
  handleOpenNewReceita?: () => void;
  handleOpenNewDespesa?: () => void;
  handleOpenNewDespesaCartao?: () => void;
  handleOpenNewTransacao?: () => void;
}

export default function NewActionFloatButton({
  handleOpenNewDespesa,
  handleOpenNewDespesaCartao,
  handleOpenNewReceita,
  handleOpenNewTransacao,
}: newActionFloatButtonProps) {
  const fabStyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };

  const actions = [
    { icon: <ArrowUpwardIcon />, name: "Receita" },
    { icon: <ArrowDownwardIcon />, name: "Despesa" },
    { icon: <CreditCardIcon />, name: "Despesa cartão" },
    { icon: <MoveUpIcon />, name: "Transferência" },
  ];

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={fabStyle}
        icon={<SpeedDialIcon openIcon={<AddIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              action.name === "Receita" && handleOpenNewReceita?.();
              action.name === "Despesa" && handleOpenNewDespesa?.();
              action.name === "Despesa cartão" &&
                handleOpenNewDespesaCartao?.();
              action.name === "Transferência" && handleOpenNewTransacao?.();
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
