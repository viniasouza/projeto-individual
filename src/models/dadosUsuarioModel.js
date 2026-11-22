var database = require("../database/config");

function listarCardsUsuario(idUsuario) {
    console.log("ACESSEI O DADOS USUARIO MODEL \n function listarCardsUsuario():", idUsuario);
    var instrucaoSql = `
        SELECT
            *
        FROM
        vwCardsUsuario
        WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarRadarUsuario(idUsuario) {
    console.log("ACESSEI O DADOS USUARIO MODEL \n function listarRadarUsuario():", idUsuario);
    var instrucaoSql = `
        SELECT
            *
        FROM
        vwRadarUsuario
        WHERE idUsuario = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarMediaAreas() {
    console.log("ACESSEI O DADOS USUARIO MODEL \n function listarMediaAreas()");
    var instrucaoSql = `
        SELECT
            *
        FROM
        vwMediaAreas;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarQuizzesDia(idUsuario) {
    console.log("ACESSEI O DADOS USUARIO MODEL \n function listarQuizzesDia():", idUsuario);
    var instrucaoSql = `
        SELECT
            DATE_FORMAT(dia, '%d/%m') AS diaTexto,
            total
        FROM
        vwQuizzesDiaUsuario
        WHERE idUsuario = ${idUsuario}
        AND dia >= CURDATE() - INTERVAL 6 DAY
        ORDER BY dia;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listarCardsUsuario,
    listarRadarUsuario,
    listarMediaAreas,
    listarQuizzesDia
}