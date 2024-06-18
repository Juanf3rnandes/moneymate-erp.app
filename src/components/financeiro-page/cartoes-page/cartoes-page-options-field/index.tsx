import { Button, Grid } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import AddIcon from "@mui/icons-material/Add";

interface CartoesOptionsFieldProps {
  openToCreateCartaoModal: () => void;
}

export default function CartoesOptionsField({
  openToCreateCartaoModal,
}: CartoesOptionsFieldProps) {
  return (
    <Grid container>
      <Grid item justifyContent="space-around">
        <Tooltip title="cadastrar novo cartao de crédito">
          <Button
            onClick={openToCreateCartaoModal}
            sx={{ borderRadius: 200, backgroundColor: "whitesmoke" }}
          >
            <AddIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
