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

function inserirRespostas(req, res) {
    var fkTentativa = req.body.fkTentativaServer;
    var listaAcertos = req.body.acertosServer; // array [{area, qtdAcertos}, ...]

    if (fkTentativa == undefined) {
        res.status(400).send("fkTentativa está undefined!");
    } else if (!Array.isArray(listaAcertos)) {
        res.status(400).send("acertosServer deve ser um array");
    } else {
        // valida itens da lista
        const areasPermitidas = ['Percepção auditiva', 'Teoria musical', 'Ritmo', 'Harmonia', 'Música e mente'];
        for (let i = 0; i < listaAcertos.length; i++) {
            const item = listaAcertos[i];
            if (!item || typeof item.area !== 'string' || areasPermitidas.indexOf(item.area) === -1) {
                res.status(400).send('Área inválida em acertosServer');
                return;
            }
            if (typeof item.qtdAcertos !== 'number' || item.qtdAcertos < 0 || item.qtdAcertos > 3) {
                res.status(400).send('qtdAcertos inválido em acertosServer');
                return;
            }
        }

        quizModel.inserirAcertos(fkTentativa, listaAcertos)
            .then(function (resultado) {
                res.json(resultado);
            }).catch(function (erro) {
                console.log(erro);
                res.status(500).json(erro.sqlMessage);
            });
    }
}


module.exports = {
    cadastrarQuiz,
    inserirRespostas
}
