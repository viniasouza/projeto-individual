var express = require("express");
var router = express.Router();

var admController = require("../controllers/admController");

router.get("/listarCardsAdm", function (req, res) {
    admController.listarCardsAdm(req, res);
});

router.get("/listarUsuariosMes", function (req, res) {
    admController.listarUsuariosMes(req, res);
});

router.get("/listarUsuariosEstado", function (req, res) {
    admController.listarUsuariosEstado(req, res);
});

router.get("/listarUsuariosGenero", function (req, res) {
    admController.listarUsuariosGenero(req, res);
});

router.get("/listarFaixaEtaria", function (req, res) {
    admController.listarFaixaEtaria(req, res);
});

module.exports = router;