"use strict";
//export serve para que o dado seja incluido em outros projetos e que seja reutilizavel
// class  que eu criei em novos projetos
//this.modelo-modelo esta contido na classe carro. serve para indenticar onde está declarado
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.ligar = function () {
        this.ligado = true;
        console.log("o carro está ligado ");
    };
    Carro.prototype.desligar = function () {
        console.log("o carro está desligado ");
        this.ligado = false;
    };
    Carro.prototype.andar = function () {
        //mostrando mensagens usando concatenações
        if (this.ligado == true) {
            console.log(" o carro" + this.modelo + " (", this.placa + ") do ano " + this.ano + " ta andando...");
        }
        else {
            console.log("o carro acbou de andar");
        }
    };
    Carro.prototype.parar = function () {
        if (this.ligado == true) {
            //mostrando mensagens usando expressão langueages
            console.log("o carro " + this.modelo + " do ano " + this.ano + " acabou de parar");
        }
        else {
            console.log("o carro acabou de parar");
        }
    };
    return Carro;
}());
exports.Carro = Carro;
