//import serve para chamar o arquivo exporte criado

import { Carro } from "./Carro";

let c1: Carro;    // aqui apenas declarei uma "referencia" a um carro, preciso criar o objeto
let c2: Carro;  
c1 = new Carro(); // agora sim, aloquei (reservei) memória para armazenar as coisas
c2 = new Carro();

// vamos preencher os dados
c1.ano    = 1968;
c1.modelo = "Fuscao Neuvouso";
c1.placa  = "ABC1234";
c1.ligado = false;
c1.cor    = "preto";

c2.ano    = 2019;
c2.modelo = "Teeeeeesela";
c2.placa  = "EUA2019";
c2.ligado = false;
c2.cor    = "Metal com tons pasteis e detalhes em svaroviski";


// vamos manipular o carro com suas operações
console.log("--------- Inicio da execucao...");
console.log(c1.getInfo());
console.log(c2.getInfo());

c1.andar();
c1.parar();

console.log("");

c2.ligar();
c2.andar();
c2.parar();
c2.desligar();

console.log(c1.getInfo());
console.log(c2.getInfo());
console.log("------- Final da execucao...");




