var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/quizController");

//Recebendo os dados do html e direcionando para a função cadastrar
router.post("/cadastrarQuiz", function (req, res) {
    quizController.cadastrarQuiz(req, res);
})
router.post("/listarId", function (req, res) {
    quizController.cadastrarQuiz(req, res);
})
router.post("/inserirRespostas", function (req, res) {
    usuarioController.autenticar(req, res);
});

module.exports = router;