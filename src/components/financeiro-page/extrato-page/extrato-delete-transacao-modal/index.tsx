import { modalStyle } from "@/config";
import { Action } from "@/providers";
import { rotatingIcon, spinKeyframes } from "@/providers/animations";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Button, Grid, Modal, Alert, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";

interface ExtratoDeleteTransacaoModalProps {
  open: boolean;
  deleteTransacaoAction: Action;
  onClose: () => void;
  onSave: () => void;
}

export default function ExtratoDeleteTransacaoModal({
  open,
  deleteTransacaoAction,
  onClose,
  onSave,
}: ExtratoDeleteTransacaoModalProps) {
  return (
    <Grid>
      <Modal open={open} onClose={onClose}>
        <Box sx={modalStyle}>
          {deleteTransacaoAction.error && (
            <Alert severity="error">{deleteTransacaoAction.error}</Alert>
          )}
          <Grid container>
            <Grid item>
              <Typography variant="h6">
                Deseja realmente deletar esta transação?
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button onClick={onClose} color="primary">
              Cancelar
            </Button>
            {deleteTransacaoAction.loading ? (
              <LoadingButton sx={spinKeyframes}>
                <AutorenewIcon sx={rotatingIcon} />
              </LoadingButton>
            ) : (
              <Button onClick={onSave} color="error">
                Deletar
              </Button>
            )}
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
