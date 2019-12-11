"use strict";
exports.__esModule = true;
var produto = /** @class */ (function () {
    function produto(_co, _no, _de, _pr, _es, _li) {
        this.codigo = _co;
        this.nome = _no;
        this.detalhes = _de;
        this.preco = _pr;
        this.estoque = _es;
        this.linkFoto = _li;
    }
    produto.prototype.getCodigo = function () {
        return this.codigo;
    };
    produto.prototype.setCodigo = function (_co) {
        this.codigo = _co;
    };
    produto.prototype.getNome = function () {
        return this.nome;
    };
    produto.prototype.setNome = function (_no) {
        this.nome = _no;
    };
    produto.prototype.getDetalhes = function () {
        return this.detalhes;
    };
    produto.prototype.setDetalhes = function (_de) {
        this.detalhes = _de;
    };
    produto.prototype.getPreco = function () {
        return this.preco;
    };
    produto.prototype.setPreço = function (_po) {
        this.preco = _po;
    };
    produto.prototype.getEstoque = function () {
        return this.estoque;
    };
    produto.prototype.setEstoque = function (_es) {
        this.estoque = _es;
    };
    produto.prototype.getLinkfoto = function () {
        return this.linkFoto;
    };
    produto.prototype.setLinkfot = function (_li) {
        this.linkFoto = _li;
    };
    produto.prototype.getInfo = function () {
        var info;
        info = "produto: " + this.codigo + " / " + this.nome + " / " + this.detalhes + " / " + this.preco + " / " + this.estoque + "/ " + this.linkFoto;
        return info;
    };
    return produto;
}());
exports.produto = produto;
