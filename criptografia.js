let senha = 'Abelinha10';
let tamanhoSenha = senha.length;
let listaCaracteresSenha = []

// altera letras dentro da senha


for(let i = 0; i < tamanhoSenha; i++){
    // insere na lista os codigos de tras pra frente
    listaCaracteresSenha.unshift(senha.charCodeAt(i).toString(8))
}

let senhaFinal = ''

for(let i = 0; i < tamanhoSenha; i++){
    if(listaCaracteresSenha[i] % 2 == 0){
        listaCaracteresSenha[i] = Number(listaCaracteresSenha[i]) + 10
    }else{
        listaCaracteresSenha[i] = (Number(listaCaracteresSenha[i]) + 20).toString(2)
    }

    senhaFinal += listaCaracteresSenha[i];
}