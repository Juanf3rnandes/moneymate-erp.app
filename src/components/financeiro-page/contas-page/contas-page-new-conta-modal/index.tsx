import { modalStyle } from "@/config";
import { Action, Form } from "@/providers";
import { rotatingIcon, spinKeyframes } from "@/providers/animations";
import { postContasRequest } from "@/services/cadastro/contas/types";
import LoadingButton from "@mui/lab/LoadingButton";
import AutorenewIcon from "@mui/icons-material/Autorenew";

import {
  Box,
  Button,
  FormControl,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface ContasPageNewContaModalProps {
  formCreateConta: Form<postContasRequest>;
  open: boolean;
  postContaAction: Action;
  onSave: () => void;
  onClose: () => void;
}

export default function ContasPageNewContaModal({
  formCreateConta,
  postContaAction,
  open,
  onSave,
  onClose,
}: ContasPageNewContaModalProps) {
  return (
    <Grid>
      <Modal open={open} onClose={onClose}>
        <Box sx={modalStyle}>
          <Grid>
            <Stack gap={3}>
              <Typography variant="h5">Nova Conta</Typography>
              <FormControl>
                <Stack gap={5}>
                  <TextField
                    placeholder="R$ 0,00"
                    variant="standard"
                    label="Saldo"
                    value={formCreateConta.value.saldo}
                  />
                  <TextField
                    placeholder="Descricao"
                    variant="standard"
                    label="descrição"
                  />
                  <TextField
                    type="text"
                    placeholder="EX:Banco do Brasil"
                    variant="standard"
                    label="Instituição"
                  />
                </Stack>
              </FormControl>
            </Stack>
          </Grid>
          <Grid>
            <Button onClick={onClose}>Cancelar</Button>
            {postContaAction.loading ? (
              <LoadingButton sx={spinKeyframes}>
                <AutorenewIcon sx={rotatingIcon} />
              </LoadingButton>
            ) : (
              <Button onClick={onSave}>Cadastrar</Button>
            )}
          </Grid>
        </Box>
      </Modal>
    </Grid>
  );
}
