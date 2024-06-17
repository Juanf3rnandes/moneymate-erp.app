import { Action } from "@/providers";
import { deleteCartaoRequest } from "@/services/cadastro/cartao/types";
import { Box, Button, Grid, Modal, Alert } from "@mui/material";
import { modalStyle } from "@/config";

interface CartaoEditModalProps {
  open: boolean;
  onClose: () => void;
  onEdit: () => void;
  editAction: Action<deleteCartaoRequest>;
}

export default function CartaoEditModal({
  open,
  onClose,
  onEdit,
  editAction,
}: CartaoEditModalProps) {
  return (
    <Grid>
      <Modal open={open} onClose={onClose}>
        <Box sx={modalStyle}>
          {editAction.error && (
            <Alert severity="error" variant="standard">
              {editAction.error}
            </Alert>
          )}
          <Grid container xs={12} md={5}>
            <Grid item>Deseja realmente deletar este cartão?</Grid>
            <Grid item>
              <Button onClick={onClose}>Cancelar</Button>
              <Button onClick={onEdit}>Deletarr</Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
