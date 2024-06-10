import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
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
import HomeVencimentoDespesaAlert from "@/components/home-page/home-vencimento-despesa-alert";
import HomeContasPerformance from "@/components/home-page/home-contas-performance";

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
    despesaVencida,
  } = useHomePageController();

  return (
    <Grid m={3}>
      {despesaVencida && <HomeVencimentoDespesaAlert />}
      <HomeGreetings
        userName="Juan Fernandes"
        greeting={homeGreeting}
        dateResumo={formattedDate}
      />

      <Grid
        display="flex"
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <HomeCartaoResumo cartoes={[]} />
        <HomeContasPerformance />
      </Grid>
      <Grid container>
        <HomeUltimasTransacoes transacoes={transacoes} />
      </Grid>
    </Grid>
  );
}
