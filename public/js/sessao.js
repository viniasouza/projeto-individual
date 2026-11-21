// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var codigo = sessionStorage.CODIGO_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_codigoIndicacao = document.getElementById("b_codigoIndicacao");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
        if (b_codigoIndicacao) b_codigoIndicacao.innerHTML = codigo;
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// validação para telas de administrador
function validarSessaoAdm() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var permissao = sessionStorage.PERMISSAO;
    var codigo = sessionStorage.CODIGO_USUARIO;

    var b_usuario = document.getElementById("b_usuario");
    var b_codigoIndicacao = document.getElementById("b_codigoIndicacao");

    if (email != null && nome != null && permissao === 'adm') {
        if (b_usuario) b_usuario.innerHTML = nome;
        if (b_codigoIndicacao) b_codigoIndicacao.innerHTML = codigo;
    } else {
        window.location = "../login.html";
    }
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

