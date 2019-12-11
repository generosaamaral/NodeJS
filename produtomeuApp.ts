import {produto} from './produtomeu'

let p1: produto;
p1= new produto(1, "anel", "anel de diamantes esmeralda",100,10,"www.meusite/fotodoanel.jpg");


let p2: produto;
p2 = new produto(2, "batom", "batom nude",30,50,"www.meusite/fotodobatom.jpg");

console.log(p1.getInfo());
console.log(p2.getInfo());

console.log("");
console.log(p1); // para imprimir em formato json
console.log(p2);  // para imprimir em formato json
