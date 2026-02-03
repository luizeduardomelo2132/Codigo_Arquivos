<?php

include("connection.php");


$nome = $_POST['nome'];
$email = $_POST['email'];
$CPF = $_POST['CPF'];
$data_nascimento = $_POST['data_nascimento'];
$senha = $_POST['senha'];


$sql = "INSERT INTO usuarios (nome, email, CPF, data_nascimento, senha) VALUES ('$nome', '$email', '$CPF', '$data_nascimento', '$senha')";



if($conn->query($sql) === true){
    echo "usuario cadrastrado com sucesso";
    header("location:");
}
else{
   echo "erro:" .$sql. "<br>" . $conn->error;
}

$conn->close();
