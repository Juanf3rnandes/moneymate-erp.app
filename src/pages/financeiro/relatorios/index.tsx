import RelatorioReceitaDespesa from "@/components/financeiro-page/relatorios-page/relatorio-receita-despesa";
import useRelatorioController from "@/components/financeiro-page/relatorios-page/hooks";
import RelatorioEvolucaoGastos from "@/components/financeiro-page/relatorios-page/relatorio-evolucao-gastos";
import { Grid, Breadcrumbs, Link, Typography, Box } from "@mui/material";
import RelatorioCategoriaDespesa from "@/components/financeiro-page/relatorios-page/relatorio-categoria-gastos";

export default function Relatorios() {
  const {
    graphConfigEvolucaoGraficos,
    graphConfigRelatorioCategoriaDespesa,
    categoriaDespesa,
  } = useRelatorioController();

  return (
    <>
      <title>Financeiro | Relatórios</title>
      <Box p={4}>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Breadcrumbs separator="-" aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit">
                Financeiro
              </Link>
              <Typography color="text.primary">Relatórios</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <RelatorioReceitaDespesa />
            </Grid>
            <Grid item xs={12} md={4}>
              <RelatorioEvolucaoGastos
                graphConfig={graphConfigEvolucaoGraficos}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <RelatorioEvolucaoGastos
                graphConfig={graphConfigEvolucaoGraficos}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <RelatorioCategoriaDespesa
                graphConfig={graphConfigRelatorioCategoriaDespesa}
                data={categoriaDespesa}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <RelatorioEvolucaoGastos
                graphConfig={graphConfigEvolucaoGraficos}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <RelatorioEvolucaoGastos
                graphConfig={graphConfigEvolucaoGraficos}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
