<?php

include('connection.php');

$titulo = $_POST['titulo'];

$autor = $_POST['autor'];

$ano = $_POST['ano'];

$categoria = $_POST['categoria'];

$quantidade = $_POST['quantidade'];

$sql = "INSERT INTO livros (titulo, autor, ano, categoria, quantidade) values ('$titulo', '$autor', '$ano', '$categoria', '$quantidade')";

if ($conn->query($sql) ===  TRUE){ 
    echo "usuario cadastrado com sucesso";
 }

    else { 
    echo "erro: " . $sql . "<br>" . $conn->error;
 }