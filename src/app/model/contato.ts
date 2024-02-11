import { Grupo } from "./grupo";

export interface Contato {
    id?: number;
    dsContato: string;
    nrCelular: string;
    dsEmail: string;
    stAtivo: number;
    grupos: Grupo[];
}