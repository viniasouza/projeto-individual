var quizModel = require("../models/quizModel");
var aquarioModel = require("../models/aquarioModel");

function cadastrarQuiz(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var fkUsuario = req.body.fkUsuarioServer;


    // Faça as validações dos valores
    if (fkUsuario == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo quizModel.js
        quizModel.cadastrarQuiz(fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarQuiz
}