import { Carro } from './Carro'

let c1: Carro;
c1 = new Carro();

c1.setano(1998);
c1.setplaca("ABC1234");
c1.setmoedlo("Fuscão nervouso");
c1.setcor("Azul");
c1.setligado(False);

console.log(c1.getano());
console.log(c1.getplaca());
console.log(c1.getmodelo());
console.log(c1.getcor());
console.log(c1.getligado());


c1.ligar();
c1.andar();
c1.desligar();
c1.parar();