import { RelatorioItemGenerate } from "@/services/cadastro/relatorio/types"
import { Box, Grid } from "@mui/material";

interface RelatoriosProps {
    ViewListGenerator: RelatorioItemGenerate[];
    onGenerate: () => void;
}


export default function RelatoriosPage({ViewListGenerator,onGenerate}: RelatoriosProps){
    return (<>
    
    <title>Financeiro - Relatórios</title>

    <Grid container xs= {12} md ={5}>

        <Grid item >
        <Box></Box>
        </Grid>
    </Grid>
    </>)
}