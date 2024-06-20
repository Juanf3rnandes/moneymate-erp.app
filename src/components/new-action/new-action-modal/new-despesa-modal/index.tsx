import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { Form } from "@/providers/shared/form";

import { postTransacaoRequest } from "@/services/cadastro/transacao/types";
import { getContasResponse } from "@/services/cadastro/contas/types";
import { getCartoesResponse } from "@/services/cadastro/cartao/types";

interface NewDespesaModalProps {
  addNewDespesaForm: Form<postTransacaoRequest>;
  contas: getContasResponse[];
  cartoes: getCartoesResponse[];
  opened: boolean;
  style: object;
  handleModal: () => void;
  onSave?: () => void;
}

export default function NewDespesaModal({
  addNewDespesaForm,
  contas,
  //eslint-disable-next-line
  cartoes,
  opened,
  handleModal,
  onSave,
  style,
}: NewDespesaModalProps) {
  const metodosPagamento = ["Dinheiro", "Boleto", "PIX"];

  return (
    <Modal open={opened} onClose={handleModal}>
      <Grid>
        <Box sx={style}>
          <FormControl>
            <Typography variant="h6">Nova Despesa</Typography>
            <Stack width="400px" gap={3}>
              <TextField
                placeholder="R$ 0,00"
                variant="standard"
                label="valor"
                value={addNewDespesaForm.value.valor}
                onChange={(e) => addNewDespesaForm.set("valor")(e.target.value)}
              />
              <TextField
                placeholder="Descrição"
                label="Descrição"
                variant="standard"
                value={addNewDespesaForm.value.nomeTransacao}
                onChange={(e) =>
                  addNewDespesaForm.set("nomeTransacao")(e.target.value)
                }
              />

              <FormControl variant="standard">
                <InputLabel id="select-conta-label">
                  Selecione uma conta
                </InputLabel>
                <Select
                  labelId="select-conta-label"
                  label="Selecione uma conta"
                  variant="standard"
                  value={addNewDespesaForm.value.conta}
                  onChange={(e) =>
                    addNewDespesaForm.set("conta")(e.target.value)
                  }
                >
                  <MenuItem disabled value="">
                    Selecione uma conta
                  </MenuItem>
                  {contas.map((conta) => (
                    <MenuItem key={conta.id} value={conta.id}>
                      {conta.descricao}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl variant="standard">
                <InputLabel id="select-conta-label">
                  Selecione um método de pagamento
                </InputLabel>
                <Select
                  labelId="select-conta-label"
                  label="Selecione pagamento"
                  variant="standard"
                  value={addNewDespesaForm.value.metodo_pagamento}
                  onChange={(e) =>
                    addNewDespesaForm.set("metodo_pagamento")(e.target.value)
                  }
                >
                  <MenuItem disabled value="">
                    Selecione um método de pagamento
                  </MenuItem>
                  {metodosPagamento.map((metPag) => (
                    <MenuItem key={metPag} value={metPag}>
                      {metPag}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                type="date"
                variant="standard"
                value={addNewDespesaForm.value.data}
                onChange={(e) => addNewDespesaForm.set("data")(e.target.value)}
              />
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
