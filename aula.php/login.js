function cadastrar() {
    const Usuario = document.getElementById('Usuario').value
    const Senha = document.getElementById('Senha').value
    const ConfirmarSenha = document.getElementById('ConfirmarSenha').value
   
   
    if(Usuario && Senha === ConfirmarSenha){
    localStorage.setItem(Usuario,Senha)
        return alert (`usuario ${Usuario} cadastrado com sucesso!`)


    }
    else{
        return alert('Usuario e/ou senha incorreta!')
    }
}


function login() {
    const Usuario = document.getElementById('Usuario').value
    const Senha = document.getElementById('Senha').value


    let UsuarioExistente = localStorage.getItem(Usuario)


    if (!UsuarioExistente)
        return alert ('usuario nao existe!!')
}
