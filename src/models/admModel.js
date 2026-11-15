var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.id AS idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarCardsAdm() {
    console.log("ACESSEI O Indicação  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            *
        FROM 
        vwCardsAdm;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarUsuariosMes() {
    console.log("ACESSEI O Indicação  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            *
        FROM 
        vmUsuariosMes;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarUsuariosEstado() {
    console.log("ACESSEI O Indicação  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            *
        FROM 
        vwUsuariosEstado;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarUsuariosGenero() {
    console.log("ACESSEI O Indicação  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            *
        FROM 
        vwGeneroUsuarios;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarCardsAdm,
    listarUsuariosMes,
    listarUsuariosEstado,
    listarUsuariosGenero
}
