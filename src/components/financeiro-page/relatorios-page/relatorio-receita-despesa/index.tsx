// pages/RelatorioReceitaDespesa.js
import { Box, Card, Grid } from "@mui/material";
import LineChart from "../line-chart";

interface RelatorioReceitaDespesaProps {
  graphConfig?: object;
}

export default function RelatorioReceitaDespesa({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  graphConfig,
}: RelatorioReceitaDespesaProps) {
  const data = {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
    datasets: [
      {
        label: "Receitas",
        data: [5000, 7000, 8000, 6000, 7500, 8500],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Despesas",
        data: [4000, 3000, 5000, 4000, 4500, 5000],
        fill: false,
        backgroundColor: "rgba(255,99,132,0.4)",
        borderColor: "rgba(255,99,132,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Receitas x Despesas",
      },
    },
  };

  return (
    <Box sx={{ width: "auto", height: "auto" }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
        sx={{ width: "100%", height: "100%" }}
      >
        <Grid item xs={12} sx={{ width: "100%", height: "100%" }}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <LineChart data={data} options={options} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
