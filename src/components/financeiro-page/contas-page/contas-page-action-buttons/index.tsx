import React from "react";
import { Button, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface ContasActionButtonsProps {
  onHandleNewConta: () => void;
}

export default function ContasActionButtons({
  onHandleNewConta,
}: ContasActionButtonsProps) {
  return (
    <Grid item xs={12} container justifyContent="flex-end">
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={onHandleNewConta}
        sx={{
          borderRadius: "50%",
          width: 56,
          height: 56,
          minWidth: 0,
          boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
          "&:hover": {
            boxShadow: "0 5px 7px 4px rgba(255, 105, 135, .4)",
          },
        }}
      />
    </Grid>
  );
}
