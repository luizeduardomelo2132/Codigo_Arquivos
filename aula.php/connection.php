<?php

$server = "localhost";
$usuario = "root";
$password = "root";
$database = "aula_php";
$port = 3307;

$conn = new mysqli($server, $usuario, $password, $database, $port);

if($conn->connect_error) {
    die("erro na conexao do banco de dados" . $conn->connect_error);
}

else{
    echo("conectado com sucesso!!");
}