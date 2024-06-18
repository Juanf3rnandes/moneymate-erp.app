import { Button, Grid, Stack } from "@mui/material";

interface ExtratoActionsButtonProps {
  onSaveXls: () => void;
}

export default function ExtratoActionsButton({
  onSaveXls,
}: ExtratoActionsButtonProps) {
  return (
    <Grid container>
      <Stack direction="row" gap={2}>
        <Button variant="outlined" onClick={onSaveXls}>
          Salvar XLS
        </Button>
      </Stack>
    </Grid>
  );
}
