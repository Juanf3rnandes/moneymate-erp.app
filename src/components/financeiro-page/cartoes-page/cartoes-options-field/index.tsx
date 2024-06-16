import { Button, Grid, Stack } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";

export default function CartoesOptionsField() {
  return (
    <Grid container>
      <Stack direction="row" justifyContent="space-around">
        <Tooltip title="cadastrar novo cartao de crédito">
          <Button sx={{ borderRadius: 200, backgroundColor: "whitesmoke" }}>
            <AddIcon />
          </Button>
        </Tooltip>
      </Stack>
    </Grid>
  );
}
