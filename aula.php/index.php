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

<body>  
    <form action="process.php" method="POST" onsubmit="return validarform()">
      
            <input type="text" name="titulo" placeholder="titulo">
                
            <input type="text" name="autor" placeholder="autor">
                  
            <input type="text" name="ano" placeholder="ano">
            
            <select name="categoria">
                <option value="">categoria</option>            
                <option value="ficçao cientifica">ficçao cientifica</option>
                <option value="misterio">misterio</option>
                <option value="romance">romance</option>
                <option value="fantasia">fantasia</option>
                <option value="aventura">aventura</option>
                <option value="terror">terror</option>

            </select>
            <input type="text" name="quantidade" placeholder="quantidade">

            <input type="submit" value="enviar">
                          
            Não tem conta? <a href="listagem.php">Cadastrar</a>
            Não tem conta? <a href="login.php">Cadastrar</a>
       

    </form>
</div>
</body>
