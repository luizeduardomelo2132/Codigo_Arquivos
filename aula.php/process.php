<?php

include('connection.php');

$email = $_POST['email'];

$password = $_POST['password'];

$confirm_password = $_POST['confirm_password'];

$sql = "INSERT INTO usuario (email, password) values ('$email', '$password')";

if ($conn->query($sql) ===  TRUE){ 
    echo "usuario cadastrado com sucesso";
 }

    else { 
    echo "erro: " . $sql . "<br>" . $conn->error;
 }