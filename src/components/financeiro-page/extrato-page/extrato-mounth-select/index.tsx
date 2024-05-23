import { Chip } from "@mui/material";

export default function ExtratoMounthSelect() {
  return (
    <Chip
      label={`${new Date().toLocaleDateString("default", {
        month: "long",
      })} ${new Date().getFullYear()}`}
      variant="outlined"
    ></Chip>
  );
}
