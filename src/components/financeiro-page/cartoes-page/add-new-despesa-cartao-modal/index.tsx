import { postDespesaCartaoRequest } from "@/services/cadastro/cartao/types";
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
  formNewDespesaCartao?: postDespesaCartaoRequest;
}

export default function AddNewDespesaCartaoModal({
  opened,
  handleClose,
  onSave,
  formNewDespesaCartao,
}: addNewDespesaCartaoModalProps) {
  const styleModalContainer = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
  };

  return (
    <Grid>
      <Modal open={opened} onClose={handleClose}>
        <Box sx={styleModalContainer}>
          <Stack gap={3}>
            <Typography variant="h5">Nova despesa cartão de crédito</Typography>
            <FormControl>
              <Stack gap={2}>
                <TextField placeholder="R$ 0,00" />
                <TextField placeholder="Descricao" />
                <TextField type="date" placeholder="data da transação" />
              </Stack>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Parcelado"
              ></FormControlLabel>
              {formNewDespesaCartao?.parcelado && (
                <Grid>
                  <FormControl>
                    <Stack gap={2}>
                      <TextField placeholder="Valor mensal" />
                      <TextField placeholder="Quantidade de meses" />
                    </Stack>
                  </FormControl>
                </Grid>
              )}
            </FormControl>
          </Stack>
          <Button>Salvar</Button>
        </Box>
      </Modal>
    </Grid>
  );
}
