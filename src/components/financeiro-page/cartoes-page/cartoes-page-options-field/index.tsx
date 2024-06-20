import { Button, Grid } from "@mui/material";

interface CartoesOptionsFieldProps {
  openToCreateCartaoModal: () => void;
}

export default function CartoesOptionsField({
  openToCreateCartaoModal,
}: CartoesOptionsFieldProps) {
  return (
    <Grid container>
      <Grid item justifyContent="space-around">
        <Button onClick={openToCreateCartaoModal}>Cadastrar Novo Cartão</Button>
      </Grid>
    </Grid>
  );
}
