import { Box, Card, Grid } from "@mui/material";
import DoughnutChart from "../doughnut-chart";

interface RelatorioCategoriaDespesaProps {
  graphConfig: object;
  data: object;
}

export default function RelatorioCategoriaDespesa({
  graphConfig,
  data,
}: RelatorioCategoriaDespesaProps) {
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
            <DoughnutChart data={data} options={graphConfig} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
