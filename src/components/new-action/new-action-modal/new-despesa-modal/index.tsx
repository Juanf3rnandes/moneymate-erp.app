import {
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
import { Form } from "@/providers/shared/form";
import { postNewDespesaRequest } from "@/services/cadastro/despesas/types";

interface NewDespesaModalProps {
  addNewDespesaForm: Form<postNewDespesaRequest>;
  opened: boolean;
  style: object;
  handleModal: () => void;
  onSave?: () => void;
}

export default function NewDespesaModal({
  addNewDespesaForm,
  opened,
  handleModal,
  onSave,
  style,
}: NewDespesaModalProps) {
  return (
    <Modal open={opened} onClose={handleModal}>
      <Grid>
        <Box sx={style}>
          <FormControl>
            <Typography variant="h6">Nova Despesa</Typography>
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
                    {addNewDespesaForm.value.paga ? "Foi Paga" : "Não foi paga"}
                  </Typography>
                </Stack>

                <Switch
                  color="error"
                  value={addNewDespesaForm.value.paga}
                  onChange={() =>
                    addNewDespesaForm.set("paga")(!addNewDespesaForm.value.paga)
                  }
                />
              </Stack>
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
