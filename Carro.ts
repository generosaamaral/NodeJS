//export serve para que o dado seja incluido em outros projetos e que seja reutilizavel
// class  que eu criei em novos projetos
//this.modelo-modelo esta contido na classe carro. serve para indenticar onde está declarado

export class Carro{
   placa: string;
   cor: string;
   modelo: string;
   ano: number;
   ligado: boolean;

   
   
ligar(): void{
    this.ligado= true;
    console.log("Carro "+this.modelo+ "  acabou de ser ligado");

    
}

desligar():void{
    this.ligado=false;
    console.log(" Carro "+this.modelo+" esta desligado");
    
}


   andar(): void{
       //mostrando mensagens usando concatenações
       if(this.ligado){
       console.log(" o carro"+this.modelo+" ("=this.placa+") do ano "+this.ano+" ta andando...");
       }
       else{
           console.log("Para andar, ligue o carro "+this.modelo);
       }
   
    }


   parar():void{
    if(this.ligado){
    //mostrando mensagens usando expressão langueages
    console.log(`o carro ${this.modelo} do ano (${this.placa}) do ano ${this.ano} acabou de parar`);
    }

else{
    console.log("Não da para estacionar um carr desligado "+this.modelo);
}
}


getInfo(): string {
    var info: string;
    info = `CARRO: ${this.modelo} / ${this.ano} / ${this.placa} / ${this.cor} / ${this.ligado}`;
    return info;
}

}


     


