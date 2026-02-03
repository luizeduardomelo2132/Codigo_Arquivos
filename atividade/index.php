<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" href="estilo.css">

</head>
<body>
    <div class="container">         
        <div class="primeira">
            <img src="Capturar.PNG" alt="cara derrubando garrafa" width="100%" height="100%">
        </div>
        <div class="segunda">
            <div class="quadrado centro">
                <form class="search-box" method="POST" action="registro.php">
                    <input type="text" placeholder="Nome" name="nome" required>
                    <input type="email" placeholder="Email" name="email" required>
                    <input type="text" placeholder="CPF" name="CPF" required>
                    <input type="date" placeholder="Data de Nascimento" name="data_nascimento" required>
                    <input type="password" placeholder="Senha" name="senha" required>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    </div>
</body>
</html>