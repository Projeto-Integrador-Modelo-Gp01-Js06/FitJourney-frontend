import Categoria from "./Categoria";

export default interface Exercicio {
    id: number;
    nome: string;
    descricao: string;
    tempo: number;
    serie: number
    repeticoes: number; 
    peso: number; 
    descanso: number; 
    midia: string; 
    data: string; 
    categoria: Categoria;
}
