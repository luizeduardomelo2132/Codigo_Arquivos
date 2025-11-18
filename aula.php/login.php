<?php
session_start();
require "connection.php";

if ($_POST) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM usuario WHERE email = '$email' LIMIT 1";
    $res = mysqli_query($conn, $sql);

    if (mysqli_num_rows($res) > 0) {
        $user = mysqli_fetch_assoc($res);

        if ($password == $user['password']) {
            $_SESSION['id'] = $user['id'];
            $_SESSION['nome'] = $user['nome'];
            header("Location: painel.php");
            exit;
        } else {
            $erro = "Senha incorreta!";
        }
    } else {
        $erro = "Usuário não encontrado!";
    }
}
?>



    <link rel="stylesheet" href="login.css">
</head>
<body class="login-body">

    <main class="login-container" role="main" aria-labelledby="titulo-login">
        <h1 id="titulo-login">Acesso ao Sistema</h1>
        <p>Faça login para continuar</p>
        <?php if(isset($erro)) echo "<p style='color:red; text-align:center;'>$erro</p>"; ?>
        <form method="POST">
             <form id="login-form" aria-describedby="descricao-form">
                <p id="descricao-form" class="sr-only">
                    Todos os campos são obrigatórios. Use a tecla Tab para navegar entre os campos.
                </p>

                <label for="usuario">Usuário:</label>
                <input type="text" id="usuario" name="email" autocomplete="username" aria-required="true" required>

                <label for="senha">Senha:</label>
                <input type="password" id="senha" name="password" autocomplete="current-password" aria-required="true" required>

                <button type="submit" id="btn-entrar">Entrar</button>

                <p id="login-msg" role="alert" aria-live="assertive"></p>
            </form>
        
            <div class="footer-link">
                Não tem conta? <a href="index.php">Cadastrar</a>
            </div>

        </form>


    </main>

 

    <script src="login.js"></script>
</body>
</html>
