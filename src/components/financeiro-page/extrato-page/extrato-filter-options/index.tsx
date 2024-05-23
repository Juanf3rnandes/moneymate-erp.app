import { Button, Grid, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
export default function ExtratoFilterOptions() {
  return (
    <Grid>
      <Stack direction="row">
        <Button
          sx={{
            borderRadius: "100%",
            backgroundColor: "white",
          }}
        >
          <SearchIcon />
        </Button>
        <Button
          sx={{
            borderRadius: "100%",
            backgroundColor: "white",
          }}
        >
          <FilterAltIcon />
        </Button>
      </Stack>
    </Grid>
  );
}
