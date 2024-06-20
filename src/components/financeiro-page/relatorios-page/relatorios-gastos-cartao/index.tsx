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
            <LineChart data={data} options={graphConfig} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
