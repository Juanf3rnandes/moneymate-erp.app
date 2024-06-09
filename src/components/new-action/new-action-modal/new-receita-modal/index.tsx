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
import {
  postNewReceitaRequest,
  postNewReceitaResponse,
} from "@/services/cadastro/receitas/types";
import { Form } from "@/providers/shared/form";
import { Action } from "@/providers";

interface NewReceitaModalProps {
  formAddReceita: Form<postNewReceitaRequest>;
  postNewReceita: Action<postNewReceitaResponse>;
  opened: boolean;
  style: object;
  handleModal: () => void;
  onSave: () => void;
}

export default function NewReceitaModal({
  formAddReceita,
  postNewReceita,
  opened,
  handleModal,
  onSave,
  style,
}: NewReceitaModalProps) {
  return (
    <Modal open={opened} onClose={handleModal}>
      <Grid>
        <Box sx={style}>
          <FormControl>
            <Typography variant="h6">Nova Receita</Typography>
            <Stack width="400px" gap={3}>
              <TextField placeholder="R$ 0,00" variant="standard" />
              <TextField placeholder="Descrição" variant="standard" />
              <TextField placeholder="Descrição" variant="standard" />
              <TextField variant="standard" />
              <TextField type="date" variant="standard" />
              <Stack justifyContent="space-between" direction="row">
                <Stack direction="row" gap={1}>
                  <CheckIcon fontSize="small" />
                  <Typography variant="body1">
                    {formAddReceita.value.recebida
                      ? "Foi Recebida"
                      : "Não foi recebida"}
                  </Typography>
                </Stack>

                <Switch
                  color="success"
                  value={formAddReceita.value.recebida}
                  onChange={() =>
                    formAddReceita.set("recebida")(
                      !formAddReceita.value.recebida
                    )
                  }
                />
              </Stack>
            </Stack>
          </FormControl>
          <Stack direction="row">
            <Button onClick={handleModal}>Cancelar</Button>
            <Button onClick={onSave}>Salvar</Button>
          </Stack>
          {postNewReceita.error && (
            <Alert severity="error">
              Ocorreu um erro ao cadastrar a receita
            </Alert>
          )}
        </Box>
      </Grid>
    </Modal>
  );
}
