import { Alert } from "@mui/material";


export default function HomeVencimentoDespesaAlert(){
    return (
        <Alert severity="info">Você possui despesa(s) a vencer em {new Date().toLocaleDateString()}</Alert>
    )
}