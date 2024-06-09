import RelatorioReceitaDespesa from "@/components/financeiro-page/relatorios-page/relatorio-receita-despesa";
import useRelatorioController from "@/components/financeiro-page/relatorios-page/hooks";
import RelatorioEvolucaoGastos from "@/components/financeiro-page/relatorios-page/relatorio-evolucao-gastos";
import { Grid } from "@mui/material";

export default function Relatorios() {
  const { graphConfigEvolucaoGraficos } = useRelatorioController();

  return (
    <>
      <Grid container justifyContent="space-around">
        <RelatorioReceitaDespesa />
        <RelatorioEvolucaoGastos graphConfig={graphConfigEvolucaoGraficos} />
      </Grid>
    </>
  );
}
