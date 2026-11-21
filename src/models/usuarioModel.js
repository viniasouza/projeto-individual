const { text } = require("express");
var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id, nome, email, fkIndicacao as indicadoPor, codigoIndicacao, permissao FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, username, dtNasc, genero, tocouInstrumento,fkEmpresa, fkGeneroMusical, fkEstado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, fkEmpresa);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha, username, dtNasc, genero, tocaInstrumento, fkIndicacao, fkGeneroFav, codigoIndicacao, fkEstado) 
        VALUES ('${nome}', '${email}', '${senha}', '${username}', '${dtNasc}', '${genero}', '${tocouInstrumento}', '${fkEmpresa}', '${fkGeneroMusical}', '${gerarCodigoIndicacao()}', '${fkEstado}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function gerarCodigoIndicacao(){
    let texto = 'MUSI';
    let numeroAleatorio = 0;

    numeroAleatorio = Math.floor(Math.random() * 9000) + 1000

    return texto + numeroAleatorio
}
module.exports = {
    autenticar,
    cadastrar
};