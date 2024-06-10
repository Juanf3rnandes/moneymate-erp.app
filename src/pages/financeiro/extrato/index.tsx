import ExtratoActionsButton from "@/components/financeiro-page/extrato-page/extrato-actions-button";
import ExtratoFilterOptions from "@/components/financeiro-page/extrato-page/extrato-filter-options";
import ExtratoMounthSelect from "@/components/financeiro-page/extrato-page/extrato-mounth-select";
import ExtratoTransacoesList from "@/components/financeiro-page/extrato-page/extrato-transacoes-list";
import { Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";

export default function Extrato() {
  return (
    <>
      <Grid>
        <Breadcrumbs separator="-" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit">
            Financeiro
          </Link>
          <Typography color="text.primary">Extrato</Typography>
        </Breadcrumbs>

        <Grid xs={8} md={4}>
          <Grid item>
            <ExtratoFilterOptions />
            <ExtratoTransacoesList transacoes={[]} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
