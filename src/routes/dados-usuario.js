var express = require("express");
var router = express.Router();

var dadosUsuarioController = require("../controllers/dadosUsuarioController");

router.get("/listarCardsUsuario/:idUsuario", function (req, res) {
    dadosUsuarioController.listarCardsUsuario(req, res);
});

router.get("/listarRadarUsuario/:idUsuario", function (req, res) {
    dadosUsuarioController.listarRadarUsuario(req, res);
});

router.get("/listarMediaAreas", function (req, res) {
    dadosUsuarioController.listarMediaAreas(req, res);
});

router.get("/listarQuizzesDia/:idUsuario", function (req, res) {
    dadosUsuarioController.listarQuizzesDia(req, res);
});

module.exports = router;