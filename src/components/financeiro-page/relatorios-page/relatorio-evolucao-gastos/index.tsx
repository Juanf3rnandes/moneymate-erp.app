import { Box, Card, Grid } from "@mui/material";
import ComboChart from "../combo-chart";

interface RelatorioEvolucaoGastosProps {
  graphConfig: object;
}

export default function RelatorioEvolucaoGastos({
  graphConfig,
}: RelatorioEvolucaoGastosProps) {
  const data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        type: "line",
        label: "Receitas",
        data: [5000, 7000, 8000, 6000, 7500, 8500],
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.4)",
        yAxisID: "y",
      },
      {
        type: "bar",
        label: "Despesas",
        data: [4000, 3000, 5000, 4000, 4500, 5000],
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
        yAxisID: "y1",
      },
    ],
  };

  return (
    <Card>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Box width="800px" height="400px">
            <ComboChart
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              data={data}
              options={graphConfig}
            />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
