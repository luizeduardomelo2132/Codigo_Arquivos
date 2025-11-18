<!DOCTYPE html>
<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>


    <title>Document</title>
    <link rel="stylesheet" href="cadas.css">
</head>
<div class="fundo">


<body>  
    <form action="process.php" method="POST" onsubmit="return validarform()">
        <div class="container flex centro centro-linha borda"><!--contem todas informacoes-->
            <div class="quadrado-menor borda "> <!--quadrado menor vermelho-->
                <div class="div-1"><!--primeira parte do quadrado vermelho-->
                    <h2 class="fon"> Bem-vindo de volta</h2><!--escrita no quadrado vermelho-->
                </div>
                <div class="div-2 centro acesse"><!--segunda parte do quadrado vermelho-->
                    <h2 class="fon">Acesse sua conta</h2><!--escrita no quadrado vermelho-->
                </div>
                <div class="div-3"><!--terceira parte do quadrado vermelho-->
                    <button class="botao"><h2>entrar</h2></button> <!--botao no quadrado vermelho-->
                </div>
            </div><!--fim do comeco do quadrado vermelho-->
            <div class="quadrado-maior borda"> <!--escrita no quadrado marrom-->
                <div class="div-4"><!--primeira parte do quadrado marrom-->            
                     <div class="comeco-1 fon-2"><h1>Crie seu cadastro</h1>
                    <input class="email" type="text" name="email" placeholder="email"><!--barra de escrita do nome-->
                </div>          
                </div>
                  <div class="div-5"><!--segunda parte do quadrado marrom-->
           
                    <input class="email" type="password" name="password" placeholder="senha"><!--barra de escrita do email-->
                    <i class="bx bxs-user"></i>
                </div>
                <div class="div-6"><!--terceira parte do quadrado marrom-->
                    <input class="email" type="password" name="confirm_password"  placeholder="confirmar senha">
                    <i class="bx bxs-lock-alt"></i>
                </div>
                <div class="div-7"><!--quarta parte do quadrado marrom-->
                    <input type="submit" value="enviar">
                </div>
                
                
                <div class="footer-link">
                    Tem uma conta? <a href="login.php">Cadastrar</a>
                </div>
        
            </div>
                
        </div>

    </form>
</div>
</body>
