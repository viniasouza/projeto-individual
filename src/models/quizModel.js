const { text } = require("express");
var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email, fkIndicacao as indicadoPor FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrarQuiz(fkUsuario) {
    console.log("ACESSEI O QUIZ MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarQuiz():", fkUsuario);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO tentativaQuiz (fkUsuario) 
        VALUES ('${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function inserirAcertos(fkTentativa, listaAcertos) {
    console.log("ACESSEI O QUIZ MODEL -> inserirAcertos", fkTentativa, listaAcertos);
    // listaAcertos é um array de objetos: { area: "...", qtdAcertos: N }
    let values = listaAcertos.map(a => `('${fkTentativa}', '${a.area}', ${a.qtdAcertos})`).join(",");
    var instrucaoSql = `
        INSERT INTO acertoArea (fkTentativa, area, qtdAcertos)
        VALUES ${values};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Dados da dashboard
function percentualGeral(fkUsuario) {
    var instrucaoSql = `
        SELECT ROUND(100 * SUM(a.qtdAcertos) / (COUNT(DISTINCT t.id) * 15)) AS percentualGeral
        FROM tentativaQuiz t
        JOIN acertoArea a ON a.fkTentativa = t.id
        WHERE t.fkUsuario = '${fkUsuario}';
    `;
    return database.executar(instrucaoSql);
}

function quizzesRealizados(fkUsuario) {
    var instrucaoSql = `SELECT COUNT(*) AS quizzesRealizados FROM tentativaQuiz WHERE fkUsuario = '${fkUsuario}';`;
    return database.executar(instrucaoSql);
}

function radarUltimaTentativa(fkUsuario) {
    var instrucaoSql = `
        SELECT area, ROUND(100 * qtdAcertos / 3) AS percentual
        FROM acertoArea
        WHERE fkTentativa = (SELECT MAX(id) FROM tentativaQuiz WHERE fkUsuario = '${fkUsuario}');
    `;
    return database.executar(instrucaoSql);
}

function piorAreaUltimaTentativa(fkUsuario) {
    var instrucaoSql = `
        SELECT area FROM acertoArea
        WHERE fkTentativa = (SELECT MAX(id) FROM tentativaQuiz WHERE fkUsuario = '${fkUsuario}')
        ORDER BY qtdAcertos ASC LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

function mediaComunidade() {
    var instrucaoSql = `
        SELECT area, ROUND(100 * AVG(qtdAcertos) / 3) AS mediaPercentual FROM acertoArea GROUP BY area;
    `;
    return database.executar(instrucaoSql);
}

function quizzesPorDia(fkUsuario) {
    var instrucaoSql = `
        SELECT DATE_FORMAT(dtTentativa, '%d-%m-%y') AS dia, COUNT(*) AS total
        FROM tentativaQuiz
        WHERE fkUsuario = '${fkUsuario}' AND dtTentativa >= CURDATE() - INTERVAL 6 DAY
        GROUP BY DATE_FORMAT(dtTentativa, '%d-%m-%y')
        ORDER BY MIN(dtTentativa);
    `;
    return database.executar(instrucaoSql);
}

function posicaoRanking(fkUsuario) {
    var instrucaoSql = `
        SELECT COUNT(*) + 1 AS posicao FROM (
            SELECT u.id, COUNT(i.id) AS qtd FROM usuario u LEFT JOIN usuario i ON i.fkIndicacao = u.id GROUP BY u.id
        ) r WHERE r.qtd > (SELECT COUNT(*) FROM usuario WHERE fkIndicacao = '${fkUsuario}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrarQuiz
    , inserirAcertos,
    percentualGeral,
    quizzesRealizados,
    radarUltimaTentativa,
    piorAreaUltimaTentativa,
    mediaComunidade,
    quizzesPorDia,
    posicaoRanking
};
