function cadastrar(){
    const Email = document.getElementById('Email').value
    const Senha = document.getElementById('Senha').value
    const ConfirmarSenha = document.getElementById('ConfirmarSenha').value
  

    if(usuario && senha === confirmarSenha){
        localStorage.setItem(usuario,senha)
        return alert(`Usuario ${usuario} cadastrado com sucesso!`)
    }
    else{
        return alert("Usuario e/ou  senha incorreta")
    }


}

function login(){
    const Email = document.getElementById('Email').value
    const senha = document.getElementById('Senha').value

    let usuarioExistente = localStorage.getItem(usuario)

     if(Email && senha === usuarioExistente){
        localStorage.setItem(Email,senha)
        alert(`Usuario ${Email} logado com sucesso!`)
        window.location.href= "pagina2.html"
    }
    else{
        return alert("Usuario e/ou  senha incorreta")
    }
}