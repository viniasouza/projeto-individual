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


module.exports = {
    autenticar,
    cadastrarQuiz
    , inserirAcertos
};
