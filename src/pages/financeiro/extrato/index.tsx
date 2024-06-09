import ExtratoActionsButton from "@/components/financeiro-page/extrato-page/extrato-actions-button";
import ExtratoCategoriaSaldo from "@/components/financeiro-page/extrato-page/extrato-categoria-saldo";
import ExtratoFilterOptions from "@/components/financeiro-page/extrato-page/extrato-filter-options";
import ExtratoMounthSelect from "@/components/financeiro-page/extrato-page/extrato-mounth-select";
import ExtratoTransacoesList from "@/components/financeiro-page/extrato-page/extrato-transacoes-list";
import DefaultLayout from "@/layouts/default";
import {
  Breadcrumbs,
  Chip,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export default function Extrato() {
  return (
    <>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit">
          Financeiro
        </Link>
        <Typography color="text.primary">Extrato</Typography>
      </Breadcrumbs>
      <Grid m={3} container justifyContent="center" alignItems="center">
        <ExtratoActionsButton />
        <Grid m={3}>
          <Stack
            gap={5}
            maxWidth={800}
            justifyContent="center"
            alignItems="center"
          >
            <Stack maxWidth={200}>
              <ExtratoMounthSelect />
              <Stack
                direction="row"
                display="flex"
                justifyContent="space-between"
              >
                <ExtratoFilterOptions />
              </Stack>
            </Stack>
            <Grid container justifyContent="space-between">
              <ExtratoTransacoesList
                transacoes={[
                  {
                    id: "avbc123",
                    data: new Date(),
                    tituloTransacao: "Pagamento de conta",
                    valor: 300,
                    tipo: "Despesa",
                  },
                  {
                    id: "avbc123",
                    data: new Date(),
                    tituloTransacao: "Pagamento de conta",
                    valor: 300,
                    tipo: "Despesa",
                  },
                  {
                    id: "avbc123",
                    data: new Date(),
                    tituloTransacao: "Pagamento de conta",
                    valor: 300,
                    tipo: "Despesa",
                  },
                  {
                    id: "avbc123",
                    data: new Date(),
                    tituloTransacao: "Pagamento de conta",
                    valor: 300,
                    tipo: "Despesa",
                  },
                  {
                    id: "avbc123",
                    data: new Date(),
                    tituloTransacao: "Pagamento de conta",
                    valor: 300,
                    tipo: "Despesa",
                  },
                  {
                    id: "avbc123",
                    data: new Date(),
                    tituloTransacao: "Pagamento de conta",
                    valor: 300,
                    tipo: "Despesa",
                  },
                  {
                    id: "avbc123",
                    data: new Date(),
                    tituloTransacao: "Pagamento de conta",
                    valor: 300,
                    tipo: "Despesa",
                  },
                  {
                    id: "avbc123",
                    data: new Date(),
                    tituloTransacao: "Pagamento de conta",
                    valor: 300,
                    tipo: "Despesa",
                  },
                ]}
              />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
