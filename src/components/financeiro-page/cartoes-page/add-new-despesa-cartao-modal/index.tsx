import { Form } from "@/providers";
import { postTransacaoRequest } from "@/services/cadastro/transacao/types";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
  Switch,
  FormControlLabel,
} from "@mui/material";

interface addNewDespesaCartaoModalProps {
  opened: boolean;
  handleClose: () => void;
  onSave?: () => void;
  configModal: object;
  formNewDespesaCartao: Form<postTransacaoRequest>;
}

export default function AddNewDespesaCartaoModal({
  opened,
  handleClose,
  onSave,
  formNewDespesaCartao,
  configModal,
}: addNewDespesaCartaoModalProps) {
  return (
    <Grid>
      <Modal open={opened} onClose={handleClose}>
        <Box sx={configModal}>
          <Grid>
            <Stack gap={3}>
              <Typography variant="h5">
                Nova despesa cartão de crédito
              </Typography>
              <FormControl>
                <Stack gap={5}>
                  <TextField
                    placeholder="R$ 0,00"
                    variant="standard"
                    value={formNewDespesaCartao.value.valor}
                    onChange={(e) =>
                      formNewDespesaCartao.set("valor")(e.target.value)
                    }
                  />
                  <TextField
                    placeholder="Descricao"
                    variant="standard"
                    value={formNewDespesaCartao.value.nomeTransacao}
                    onChange={(e) =>
                      formNewDespesaCartao.set("nomeTransacao")(e.target.value)
                    }
                  />
                  <TextField
                    type="date"
                    placeholder="data da transação"
                    variant="standard"
                    value={formNewDespesaCartao.value.data}
                    onChange={(e) =>
                      formNewDespesaCartao.set("data")(e.target.value)
                    }
                  />
                </Stack>
              </FormControl>
              <FormControlLabel
                control={
                  <FormControl>
                    <Switch value={formNewDespesaCartao.value.despesaFixa} />
                  </FormControl>
                }
                label="Despesa Fixa"
              />
            </Stack>
          </Grid>
          <Grid>
            <Button>Cancelar</Button>
            <Button onClick={onSave}>Salvar</Button>
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
