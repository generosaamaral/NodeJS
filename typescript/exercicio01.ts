import teclado=require("readline-sync");

//nmp install --save @types/readline-sync serve para criar uma pasta biblioteca com associação de tipos

var titulo: string;
var descri: string;

titulo= teclado.question("digite um titulo");
descri= teclado.question("digite uma descrição");
var pagina = `<html> <head> <title> .: exercicio 01 .: </title> </head> <body>
<H1> ${titulo} </H1>`;

console.log(pagina);



//var pergunta01:string= readlinesync.question("");
//var pergunta01:string= readlinesync.question("");
//var html : string= (<html>;</hatml>;<head>;</head>) 