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
    <Card>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Box width="800px" height="400px">
            <DoughnutChart data={data} options={graphConfig} />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
