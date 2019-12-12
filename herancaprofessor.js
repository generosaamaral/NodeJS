"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var herancapessoa_1 = require("./herancapessoa");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.setvalorHora = function (valorHora) {
        this.valorHora = valorHora;
    };
    Professor.prototype.getvalorHora = function () {
        return this.valorHora;
    };
    Professor.prototype.setnumHoras = function (numHoras) {
        this.numHoras = numHoras;
    };
    Professor.prototype.getnumHoras = function () {
        return this.numHoras;
    };
    Professor.prototype.setareaFormacao = function (areaFormacao) {
        this.areaFormacao = areaFormacao;
    };
    Professor.prototype.getareaFormacao = function () {
        return this.areaFormacao;
    };
    return Professor;
}(herancapessoa_1.Pessoa));
exports.Professor = Professor;
