import { Action } from "@/providers";
import { rotatingIcon, spinKeyframes } from "@/providers/animations";
import { deleteCartaoRequest } from "@/services/cadastro/cartao/types";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, Button, Grid, Modal, Alert, Typography } from "@mui/material";
import AutorenewIcon from "@mui/icons-material/Autorenew";

interface CartaoDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onDelete: () => void; //chama funcao deletar
  deleteAction: Action<deleteCartaoRequest>; //executa a action de delete
  configModal: object; // css do modal
}

export default function CartaoDeleteModal({
  open,
  onClose,
  onDelete,
  deleteAction,
  configModal,
}: CartaoDeleteModalProps) {
  return (
    <Grid>
      <Modal open={open} onClose={onClose}>
        <Box sx={configModal}>
          {deleteAction.error && (
            <Alert severity="error" variant="standard">
              {deleteAction.error}
            </Alert>
          )}
          <Grid container>
            <Grid item>
              <Typography variant="h6">
                Deseja realmente deletar este cartão?
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button onClick={onClose} color="primary">
              Cancelar
            </Button>
            {deleteAction.loading ? (
              <LoadingButton sx={spinKeyframes}>
                <AutorenewIcon sx={rotatingIcon} />
              </LoadingButton>
            ) : (
              <Button onClick={onDelete} color="error">
                Deletar
              </Button>
            )}
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
