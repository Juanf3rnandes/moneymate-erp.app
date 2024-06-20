import { Inter } from "next/font/google";
import HomeGreetings from "@/components/home-page/home-greetings";
import Grid from "@mui/material/Grid";
import HomeUltimasTransacoes from "@/components/home-page/home-ultimas-transacoes";
import HomeCartaoResumo from "@/components/home-page/home-cartao-resumo";
import HomeVencimentoDespesaAlert from "@/components/home-page/home-vencimento-despesa-alert";
import HomeContasPerformance from "@/components/home-page/home-contas-performance";
import { useAuth } from "@/auth";
import useHomePageController from "@/components/home-page/hooks";

export default function Home() {
  const auth = useAuth();
  const userName = auth?.user;

  const {
    homeGreeting,
    getTransacoesAction,
    formattedDate,
    transacoes,
    despesaVencida,
  } = useHomePageController();

  return (
    <>
      <title> Moneymate | Home</title>
      <Grid m={3}>
        {despesaVencida && <HomeVencimentoDespesaAlert />}
        <HomeGreetings greeting={homeGreeting} dateResumo={formattedDate} />

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
          <HomeUltimasTransacoes
            transacoes={transacoes}
            actionTransacoes={getTransacoesAction}
          />
        </Grid>
      </Grid>
    </>
  );
}
