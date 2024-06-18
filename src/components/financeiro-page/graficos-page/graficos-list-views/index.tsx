import { Box, Button, FormControl, Grid } from "@mui/material";

export interface GraficosListGenerateViewProps {
    
}


export default function GraficosListGenerateView(){

    return (
        <Grid container>
        <Box p = {4} >
        <Grid item></Grid>
        <Button>Gerar planilha</Button>
         </Box>
        </Grid>
    )
    }