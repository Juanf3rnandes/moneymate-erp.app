import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dotenv from "dotenv";
import {
  Box,
  Fab,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import MoveUpIcon from "@mui/icons-material/MoveUp";

dotenv.config();

export default function App({ Component, pageProps }: AppProps) {
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
    <>
      <Component {...pageProps} />
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
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}
