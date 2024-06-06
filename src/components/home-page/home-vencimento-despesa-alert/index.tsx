import { Alert, Grid } from "@mui/material";

export default function HomeVencimentoDespesaAlert() {
  return (
    <Grid justifyContent="center" alignItems="center" container>
      <Alert severity="info">
        Você possui despesa(s) a vencer em {new Date().toLocaleDateString()}
      </Alert>
    </Grid>
  );
}
