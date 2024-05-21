import ExtratoCategoriaSaldo from "@/components/financeiro-page/extrato-page/extrato-categoria-saldo";
import ExtratoFilterOptions from "@/components/financeiro-page/extrato-page/extrato-filter-options";
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
      <DefaultLayout userName="John Doe" />
      <Grid m={3}>
        <Breadcrumbs separator=">" aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit">
            Financeiro
          </Link>
          <Typography color="text.primary">Extrato</Typography>
        </Breadcrumbs>

        <Grid m={3}>
          <Typography variant="h5">Transações</Typography>
          <Stack
            gap={5}
            maxWidth={800}
            justifyContent="center"
            alignItems="center"
          >
            <Stack maxWidth={200}>
              <Stack
                direction="row"
                display="flex"
                justifyContent="space-between"
              >
                <Chip
                  label={new Date().toLocaleDateString("default", {
                    month: "long",
                  })}
                  variant="outlined"
                ></Chip>
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
              <ExtratoCategoriaSaldo
                valorBalancoMensal={500}
                valorReceitas={10000}
                valorDespesas={1200}
              />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
