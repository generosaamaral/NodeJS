import { Pessoa } from "./herancapessoa"; //PESSOA NO CASO É O PAI E OS FILHOS(ANULO E PROFESSOR) ERDAM A HERANÇA DO PAI.
import { Aluno } from "./herancaaluno";
import {Professor} from "./herancaprofessor";

var p:Pessoa;

p = new Pessoa();
p.setNumRegistro(1234);
p.setNome("Genereites de Albuquerque Lima Filho Jr");
p.setEmail("gene@generates.com.br");
p.setTelefone("+55 11 98765-4321");

console.log(p);

var a: Aluno;
a = new Aluno();
a.setNumRegistro(1235);
a.setNome("Isidro de Almeida Botelho");
a.setEmail("isi@isidrocorp.com");
a.setTelefone("+55 11 12345-6789");
a.setCurso("Java Full Stack Galaxy Master");
a.setAnoMatricula(2019);
console.log(a); 

var pro: Professor;
pro = new Professor();
pro.setNumRegistro(1236);
pro.setNome("Miguel Antonio");
pro.setEmail("professor@chique.com");
pro.setTelefone("+55 11 701522-8475");
pro.setvalorHora(100);
pro.setnumHoras(250);
pro.setareaFormacao("linguistica");

console.log(pro); 

