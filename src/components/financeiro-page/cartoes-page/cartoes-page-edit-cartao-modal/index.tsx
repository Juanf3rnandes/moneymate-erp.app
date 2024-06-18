import { Action, Form } from "@/providers";
import {
  deleteCartaoRequest,
  getCartaoResponse,
} from "@/services/cadastro/cartao/types";
import {
  Box,
  Button,
  Grid,
  Modal,
  Alert,
  FormControl,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { modalStyle } from "@/config";

interface CartaoEditModalProps {
  formCartao: Form<getCartaoResponse>;
  open: boolean;
  onClose: () => void;
  onEdit: () => void;
  editAction: Action<deleteCartaoRequest>;
}

export default function CartaoEditModal({
  formCartao,
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
          <FormControl>
            <Typography variant="h6">{formCartao.value.descricao}</Typography>
            <Stack width="auto" gap={3}>
              <TextField placeholder="R$ 0,00" variant="standard" />
              <TextField placeholder="Descrição" variant="standard" />
              <TextField placeholder="Descrição" variant="standard" />
              <TextField variant="standard" />
              <TextField type="date" variant="standard" />
              <Stack justifyContent="space-between" direction="row">
                <Stack direction="row" gap={1}></Stack>
              </Stack>
            </Stack>
          </FormControl>
          <Grid item>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onEdit}>Editar</Button>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
