"use strict";
//import serve para chamar o arquivo exporte criado
exports.__esModule = true;
var Carro_1 = require("./Carro");
var c1; // apenas declarei uma referencia a um carro, preciso criar o objeto
c1 = new Carro_1.Carro();
//vamos preencher os dados
c1.ano = 1968;
c1.modelo = "fuscão neuvoso";
c1.placa = "ABC1234";
//vams manipular o carro com suas operações
c1.andar();
c1.parar();
