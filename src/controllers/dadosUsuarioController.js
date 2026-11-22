var dadosUsuarioModel = require("../models/dadosUsuarioModel");

function listarCardsUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    dadosUsuarioModel.listarCardsUsuario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os cards do usuário: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarRadarUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    dadosUsuarioModel.listarRadarUsuario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar o radar do usuário: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarMediaAreas(req, res) {
    dadosUsuarioModel.listarMediaAreas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar a média das áreas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarQuizzesDia(req, res) {
    var idUsuario = req.params.idUsuario;

    dadosUsuarioModel.listarQuizzesDia(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os quizzes por dia: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listarCardsUsuario,
    listarRadarUsuario,
    listarMediaAreas,
    listarQuizzesDia
}