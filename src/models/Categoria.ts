import Exercicio from "./Exercicio";

export default interface Categoria {
    id: number;
    nome: string;
    exercicio?: Exercicio[]; 
}
