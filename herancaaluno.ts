import { Pessoa } from "./herancapessoa";

export class Aluno extends Pessoa{

    private curso: string;
    private anoMatricula: number;

    public setCurso(curso: string): void{
           this.curso = curso;
    }
    public getCurso(): string{
           return this.curso;
    }
    public setAnoMatricula(anoMatricula : number): void{
           this.anoMatricula = anoMatricula;
    }
    public getAnoMatricula(): number{
           return this.anoMatricula;
    }
} 