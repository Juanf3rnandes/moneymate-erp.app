import { Box, Card, Grid } from "@mui/material";
import LineChart from "../line-chart";

interface RelatorioGastosCartaoProps {
  graphConfig: object;
  data: object;
}

export default function RelatorioGastosCartao({
  graphConfig,
  data,
}: RelatorioGastosCartaoProps) {
  return (
    <Card>
      <Grid container direction="column" alignItems="center" spacing={2}>
        <Grid item>
          <Box width="800px" height="400px">
            <LineChart data={data} options={graphConfig} />
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
