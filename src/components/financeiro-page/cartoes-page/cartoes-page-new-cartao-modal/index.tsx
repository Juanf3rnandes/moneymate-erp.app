import { Action, Form } from "@/providers";
import { modalStyle } from "@/config";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { postCartaoRequest } from "@/services/cadastro/cartao/types";
import LoadingButton from "@mui/lab/LoadingButton";
import { rotatingIcon, spinKeyframes } from "@/providers/animations";
import AutorenewIcon from "@mui/icons-material/Autorenew";

interface NewCartaoModalProps {
  form: Form<postCartaoRequest>;
  open: boolean;
  postCartaoAction: Action;
  onClose: () => void;
  onSave: () => void;
}

export default function NewCartaoModal({
  form,
  open,
  postCartaoAction,
  onClose,
  onSave,
}: NewCartaoModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        {postCartaoAction.error && (
          <Alert severity="error" onClose={postCartaoAction.closeMsg}>
            {postCartaoAction.error}
          </Alert>
        )}

        <Grid>
          <Grid>
            <FormControl>
              <Typography variant="h6">Novo cartao de crédito</Typography>
              <Stack width="400px" gap={3}>
                <TextField
                  placeholder="EX:Visa"
                  variant="standard"
                  label="Bandeira"
                  value={form.value.bandeira}
                  onChange={(e) => form.set("bandeira")(e.target.value)}
                />
                <TextField
                  placeholder="R$ 0,00"
                  variant="standard"
                  label="Limite do cartão"
                  value={form.value.limite}
                  onChange={(e) => form.set("limite")(e.target.value)}
                />
                <TextField
                  placeholder="EX: cartão nubank"
                  label="Descricao"
                  variant="standard"
                  value={form.value.descricao}
                  onChange={(e) => form.set("descricao")(e.target.value)}
                />

                <TextField
                  type="number"
                  label="Dia fechamento"
                  variant="standard"
                  value={form.value.dia_fechamento}
                  onChange={(e) => form.set("dia_fechamento")(e.target.value)}
                />
                <TextField
                  type="number"
                  label="Dia vencimento"
                  variant="standard"
                  value={form.value.dia_vencimento}
                  onChange={(e) => form.set("dia_vencimento")(e.target.value)}
                />
                <Stack justifyContent="space-between" direction="row">
                  <Stack direction="row" gap={1}></Stack>
                </Stack>
              </Stack>
            </FormControl>
          </Grid>
          <Grid>
            <Button onClick={onClose}>Cancelar</Button>
            {postCartaoAction.loading ? (
              <LoadingButton sx={spinKeyframes}>
                <AutorenewIcon sx={rotatingIcon} />
              </LoadingButton>
            ) : (
              <Button onClick={onSave}>Salvar</Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
