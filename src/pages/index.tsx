import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import DefaultLayout from "@/layouts/default";
import AppContent from "@/app/app-content";
import mock from "@/mocks/funcionalidades-erp.json";
import { getMenuFuncionalidadesErpResponse } from "@/services/cadastro/types";
import HomeGreetings from "@/components/home-page/home-greetings";
import useHomePageController from "@/components/home-page/hooks";
import HomeGraphTransactions from "@/components/home-page/home-graph-transations";
import HomeResumoContas from "@/components/home-page/home-resumo-contas";
import { Stack, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import HomeUltimasTransacoes from "@/components/home-page/home-ultimas-transacoes";
import HomeCartaoResumo from "@/components/home-page/home-cartao-resumo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const {
    homeGreeting,
    handleHomeGreetings,
    formattedDate,
    balancoSaldo,
    receitas,
    despesas,
    transacoes,
  } = useHomePageController();

  return (
    <Grid>
      <DefaultLayout userName="Juan Fernandes" />
      <HomeGreetings
        userName="John Doe"
        greeting={homeGreeting}
        dateResumo={formattedDate}
      />
      <Stack direction="row">
        <HomeUltimasTransacoes transacoes={transacoes} />
      </Stack>
      <HomeCartaoResumo cartoes={[]} />
    </Grid>
  );
}
