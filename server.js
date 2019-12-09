// carreguei a biblioteca do Express na variável express
var express = require("express");
var cors    = require("cors");

// criei um servidor invocando a biblioteca 
var server = express();
server.use(cors());

var listaDeFuncs =[ 
                    {
                     "id"  : 1,
                     "nome":"Professor Isidro",
                     "endereco": "Av. Ataliba Leonel",
                     "numero": 500,
                     "salario": 1000
                    },
                    {
                     "id"  : 2, 
                     "nome":"Professor Tiburcio",
                     "endereco": "Av. Voluntarios da Patria",
                     "numero": 600,
                     "salario": 1500
                    },
                    {
                     "id"  : 3, 
                     "nome":"Professor Thiago",
                     "endereco": "Av. Cruzeiro do Sul",
                     "numero": 700,
                     "salario": 1700
                    },
                    {
                      "id"  : 4,
                     "nome":"Professora Ana",
                     "endereco": "Av. Dr. Zuquim",
                     "numero": 300,
                     "salario": 1200
                    }
                  ]


server.get("/funcionarios/:id", function(req, res){
    var id = req.params.id;
    if (id <= 0 || id > 4){
        res.json({"resultado":"funcionario nao encontrado"});
    }
    else{
        res.json(listaDeFuncs[id-1]); // preguiça
    }

});

server.get("/funcionarios", function(req, res){
    console.log("Browser vai recuperar a lista inteira!");
    res.json(listaDeFuncs);
});                  

server.get("/", function(req, res){
   console.log("Browser acessou o caminho /");
   res.send("<html><body>Acesse nossos Servicos<br/>/teste - para testar <Br/> /funcionarios - para recuperar todos os funcionarios<br/> /funcionarios/{num} - para recuperar um funcionario especifico</body></html>");
});
server.get('/teste', function(req, res){
    console.log("Browser acessou o caminho /teste ");
    res.send("Testando o NodeJS-Server");
});

server.listen(3000, function(){
    console.log("Servidor rodando na porta 3000");
});
