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
  postNewTransacaoAction: Action;
  handleModal: () => void;
  onSave: () => void;
  style: Object;
}

export default function NewTransacaoModal({
  opened,
  form,
  postNewTransacaoAction,
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
              <TextField placeholder="R$ 0,00" variant="standard"  label= 'valor' 
              value = {form.value.valor}
              onChange={ (e) => form.set('valor')(e.target.value)}
              />
              <TextField placeholder="Descrição" variant="standard" 
              label= 'Descrição' value ={form.value.nomeTransacao}
              onChange={(e) => form.set('nomeTransacao')(e.target.value)}
              />
              <TextField variant="standard"  label ='Conta' placeholder="conta"
              value = {form.value.conta}
              onChange={(e) => form.set('conta')(e.target.value)}
              />
              <TextField type="date" variant="standard" placeholder="data" label= 'data'  />
              <Stack justifyContent="space-between" direction="row"></Stack>
            </Stack>
          </FormControl>
          <Stack direction="row">
            <Button onClick={handleModal}>Cancelar</Button>
            <Button onClick={onSave} >Salvar</Button>
          </Stack>
        </Box>
      </Grid>
    </Modal>
  );
}
