var admModel = require("../models/admModel");

function listar(req, res) {
    admModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function listarCardsAdm(req, res) {
    admModel.listarCardsAdm().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as indicações: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarUsuariosMes(req, res) {
    admModel.listarUsuariosMes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as indicações: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarUsuariosEstado(req, res) {
    admModel.listarUsuariosEstado().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as indicações: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarUsuariosGenero(req, res) {
    admModel.listarUsuariosGenero().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as indicações: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarFaixaEtaria(req, res) {
    admModel.listarFaixaEtaria().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as indicações: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    listar,
    listarCardsAdm,
    listarUsuariosMes,
    listarUsuariosEstado,
    listarUsuariosGenero,
    listarFaixaEtaria
}