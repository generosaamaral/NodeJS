import { Pessoa } from "./herancapessoa";

export class Professor extends Pessoa{
   
    
        private valorHora   : number;
        private numHoras    : number;
        private areaFormacao: string;
    
        public setvalorHora(valorHora: number): void{
               this.valorHora = valorHora;
        }
        public getvalorHora(): number{
               return this.valorHora;
        }
        public setnumHoras(numHoras : number): void{
               this.numHoras = numHoras;
        }
        public getnumHoras(): number{
               return this.numHoras;
        }
   
        public setareaFormacao(areaFormacao : string): void{
               this.areaFormacao = areaFormacao;
       }
        public getareaFormacao(): string{
               return this.areaFormacao;
        }
    
        } 