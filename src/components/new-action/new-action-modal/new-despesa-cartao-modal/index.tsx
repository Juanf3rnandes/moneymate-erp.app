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
  import { postDespesaCartaoRequest } from "@/services/cadastro/cartao/types";

  interface NewDespesaCartaoModalProps {
    addNewDespesaCartaoForm: Form<postDespesaCartaoRequest>;
    opened: boolean;
    style: object;
    handleModal: () => void;
    onSave?: () => void;
  }
  
  export default function NewDespesaCartaoModal({
    addNewDespesaCartaoForm,
    opened,
    handleModal,
    onSave,
    style,
  }: NewDespesaCartaoModalProps) {
    return (
      <Modal open={opened} onClose={handleModal}>
        <Grid>
          <Box sx={style}>
            <FormControl>
              <Typography variant="h6">Nova Despesa cartão</Typography>
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
                      {addNewDespesaCartaoForm.value.parcelado ? "Compra parcelada" : "Paga integralmente"}
                    </Typography>
                  </Stack>
  
                  <Switch
                    color="primary"
                    value={addNewDespesaCartaoForm.value.parcelado}
                    onChange={() =>
                      addNewDespesaCartaoForm.set("parcelado")(!addNewDespesaCartaoForm.value.parcelado)
                    }
                  />

                </Stack>
                {addNewDespesaCartaoForm.value.parcelado && (
                    <FormControl>
                   <Stack sx={{Width:'100px'}} direction='row'
                   gap={3}
                    >
                   <TextField variant="standard"
                    placeholder="Numero de parcelas"
                    type="number"/>
                    <TextField variant="standard"
                    placeholder="Valor parcela"
                    type="number"
                    />
                   </Stack>
                    </FormControl>
                  )}
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
  