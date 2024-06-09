import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

export default function ExtratoFilterOptions() {
  return (
    <Grid>
      <FormControl>
        <Stack direction="row" spacing={2} alignItems="center" width={500}>
          <TextField
            variant="outlined"
            placeholder="Pesquisar"
            label="Palavra-chave"
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
