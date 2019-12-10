export class Carro {

    private placa: string;
    private cor: string;
    private modelo: string;
    private ano: number;
    private ligado: boolean;

    /* preciso de metodos específicos (GETTERES E SETTERES) para manipular meus atributos */

    public getPlaca(): string {
        return this.placa;
    }
    public setPlaca(_placa: string): void {
        this.placa = _placa;
    }

    public setAno(ano: number): void {
        this.ano = ano;
    }
    public getAno(): number {
        return this.ano
    }



    public getCor(): string {
        return this.cor;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;

    }


    public setModelo(_modelo: string): void {
        this.modelo = _modelo;

    }

    public getModelo(): string {
        return this.modelo;
    }

    public setLigado(_ligado: boolean): void {
        this.ligado = _ligado;
    }

    public getLigado(): boolean {
        return this.ligado;

    }

    //começa aqui a função



    ligar(): void {
        this.ligado = true;
        console.log("Carro " + this.modelo + "  acabou de ser ligado");
    }

    desligar(): void {
        this.ligado = false;
        console.log(" Carro " + this.modelo + " esta desligado");
    }


    andar(): void {
        //mostrando mensagens usando concatenações
        if (this.ligado) {
            console.log(" o carro" + this.modelo + " ("+this.placa + ") do ano " + this.ano + " ta andando...");
        }
        else {
            console.log("Para andar, ligue o carro " + this.modelo);
        }
    }


    parar(): void {
        if (this.ligado) {
            //mostrando mensagens usando expressão langueages
            console.log(`o carro ${this.modelo} do ano (${this.placa}) do ano ${this.ano} acabou de parar`);
        }

        else {
            console.log("Não da para estacionar um carr desligado " + this.modelo);
        }
    }


    //getInfo(): string {
       // var info: string;
       // info = `CARRO: ${this.modelo} / ${this.ano} / ${this.placa} / ${this.cor} / ${this.ligado}`;
       // return info;
}












 

}

