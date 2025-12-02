<?php

include("connection.php");

$titulo = $_POST['titulo'];
$autor = $_POST['autor'];
$ano = $_POST['ano'];
$categoria = $_POST['categoria'];
$quantidade = $_POST['quantidade'];

$sql = "INSERT INTO livros (titulo, autor, ano, categoria, quantidade) VALUES ('$titulo', '$autor', '$ano', '$categoria', '$quantidade')";


if($conn->query($sql) === true){
    echo "usuario cadrastrado com sucesso";
    header("location:lista.php");
}
else{
   echo "erro:" .$sql. "<br>" . $conn->error;
}

$conn->close();