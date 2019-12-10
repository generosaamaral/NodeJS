import { Carro } from './exemplosetget'

let c1: Carro;
c1 = new Carro();

c1.setAno(1998);
c1.setPlaca("ABC1234");
c1.setModelo("Fuscão nervouso");
c1.setCor("Azul");
c1.setLigado(false);

console.log(c1.getAno());
console.log(c1.getPlaca());
console.log(c1.getModelo());
console.log(c1.getCor());
console.log(c1.getLigado());


c1.ligar();
c1.andar();
c1.desligar();
c1.parar();