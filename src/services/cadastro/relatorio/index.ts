import axios from "axios";
import { postRelatorioItemGenerateRequest } from "./types";
import { backendConfig } from "@/config";

export class RelatorioService {
    constructor(){}


    async postGeneratePlanilha(params:postRelatorioItemGenerateRequest) {
        return axios.post(`${backendConfig.cadastro}/relatorio/${params.codigoView}`)
    }
}