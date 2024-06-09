import { Button, Grid, Stack } from "@mui/material";

interface ExtratoActionsButtonProps {
  onSaveXls: () => void;
  handleNewTransacaoModal: () => void;
}

export default function ExtratoActionsButton({
  handleNewTransacaoModal,
  onSaveXls,
}: ExtratoActionsButtonProps) {
  return (
    <Grid container>
      <Stack direction="row" gap={2}>
        <Button variant="contained" onClick={handleNewTransacaoModal}>
          Nova transação
        </Button>
        <Button variant="outlined" onClick={onSaveXls}>
          Salvar XLS
        </Button>
      </Stack>
    </Grid>
  );
}
