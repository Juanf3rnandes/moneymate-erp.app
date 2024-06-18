import { Form } from "@/providers";
import { getTransacaoResponse } from "@/services/cadastro/transacao/types";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

interface ExtratoFilterOptions {
  formFilter: Form<getTransacaoResponse>;
}

export default function ExtratoFilterOptions({
  formFilter,
}: ExtratoFilterOptions) {
  return (
    <Grid>
      <FormControl>
        <Stack direction="row" spacing={2} alignItems="center" width={500}>
          <TextField
            variant="outlined"
            placeholder="Pesquisar"
            label="Palavra-chave"
            value={formFilter.value.nomeTransacao}
            onChange={(e) => formFilter.set("nomeTransacao")(e.target.value)}
          />
          <FormControl>
            <Stack width={100}>
              <InputLabel id="demo-simple-select-standard-label">
                Tipo
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Tipo"
                variant="outlined"
              >
                <MenuItem value={10}>Receita</MenuItem>
                <MenuItem value={20}>Despesa</MenuItem>
              </Select>
            </Stack>
          </FormControl>
        </Stack>
      </FormControl>
    </Grid>
  );
}
