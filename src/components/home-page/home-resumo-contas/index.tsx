import React from "react";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box, FormControl, InputLabel, Select } from "@mui/material";

interface HomeResumoContasProps {
  balancoSaldo: number;
  despesas: number;
  receitas: number;
  competencia: string;
}

export default function HomeResumoContas({
  balancoSaldo,
  despesas,
  receitas,
  competencia,
}: HomeResumoContasProps) {
  return <Card></Card>;
}
