import React from 'react';
import { useAct, useService } from "@/providers";
import { RelatorioService } from "@/services/cadastro/relatorio";



export default function useRelatoriosController(){

    const[relatorioSelected, setRelatorioSelected] = React.useState<number>(0);

    const services = useService((h) => ({
        relatorios: new RelatorioService()
    }))
    
    
    const postGerarPlanilha = useAct(() => 
    services.relatorios.postGeneratePlanilha({codigoView: relatorioSelected as number} )
    
    )
}