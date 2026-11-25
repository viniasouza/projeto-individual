let senha = 'Abelinha10';
let tamanhoSenha = senha.length;
let listaCaracteresSenha = []
let senhaFinal = ''


function criptografar(){
    senhaFinal = ''

    for(let i = 0; i < tamanhoSenha; i++){
        // insere na lista os codigos na ordem inversa
        listaCaracteresSenha.unshift(senha.charCodeAt(i).toString(8))
    }
    
    
    for(let i = 0; i < tamanhoSenha; i++){
        if(listaCaracteresSenha[i] % 2 == 0){
            listaCaracteresSenha[i] = Number(listaCaracteresSenha[i]) + 10
        }else{
            listaCaracteresSenha[i] = (Number(listaCaracteresSenha[i]) + 20).toString(2)
        }
        
        senhaFinal += listaCaracteresSenha[i];
    }
    
}

function descriptografar(){
// dificil prever a qtd de caracteres que o ultimo digito da senho se tornou

 
}
