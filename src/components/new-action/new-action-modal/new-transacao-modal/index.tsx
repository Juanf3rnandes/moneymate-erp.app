import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  Modal,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { postTransacaoRequest } from "@/services/cadastro/transacao/types";
import { Action, Form } from "@/providers";
interface NewTransacaoModalProps {
  opened: boolean;
  form: Form<postTransacaoRequest>;
  postNewTransacao: Action<postTransacaoRequest>;
  handleModal: () => void;
  onSave: () => void;
  style: Object;
}

export default function NewTransacaoModal({
  opened,
  form,
  postNewTransacao,
  handleModal,
  onSave,
  style,
}: NewTransacaoModalProps) {
  return (
    <Modal open={opened} onClose={handleModal}>
      <Grid>
        <Box sx={style}>
          <FormControl>
            <Typography variant="h6">Nova Transacao</Typography>
            <Stack width="400px" gap={3}>
              <TextField placeholder="R$ 0,00" variant="standard" />
              <TextField placeholder="Descrição" variant="standard" />
              <TextField placeholder="Descrição" variant="standard" />
              <TextField variant="standard" />
              <TextField type="date" variant="standard" />
              <Stack justifyContent="space-between" direction="row"></Stack>
            </Stack>
          </FormControl>
          <Stack direction="row">
            <Button onClick={handleModal}>Cancelar</Button>
            <Button onClick={onSave}>Salvar</Button>
          </Stack>
        </Box>
      </Grid>
    </Modal>
  );
}
