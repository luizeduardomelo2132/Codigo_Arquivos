<?php
include('connection.php'); 

$sql = "SELECT * FROM livros";
$result = $conn->query($sql);

?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Listagem de Livros</title>
    <style>
        /* ===== Estilo limpo da tabela ===== */
        table {
            width: 80%;
            margin: 20px auto;
            border-collapse: collapse;
            background-color: #F5F5F5; /* Fundo */
        }

        th, td {
            padding: 10px 12px;
            text-align: left;
            border-bottom: 1px solid #26A69A; /* Bordas sutis */
        }

        th {
            background-color: #2C73D2; /* Cor primária */
            color: white;
        }

        tr:nth-child(even) {
            background-color: #F0FAF9; /* Linhas alternadas muito suaves */
        }

        td {
            color: #333333; /* Texto principal */
        }

        .sem-livros {
            text-align: center;
            color: #666666; /* Texto secundário */
            margin-top: 30px;
            font-size: 1.1em;
        }
    </style>

</head>

<body>

<h1>Listagem de Livros</h1>

<?php
if ($result && $result->num_rows > 0) {
    echo "<table>";
    echo "<tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Ano</th>
            <th>Categoria</th>
            <th>Quantidade</th>
          </tr>";

    while ($row = $result->fetch_assoc()) {
        echo "<tr>";
        echo "<td>" . $row['id'] . "</td>";
        echo "<td>" . $row['titulo'] . "</td>";
        echo "<td>" . $row['autor'] . "</td>";
        echo "<td>" . $row['ano'] . "</td>";
        echo "<td>" . $row['categoria'] . "</td>";
        echo "<td>" . $row['quantidade'] . "</td>";
        echo "</tr>";
    }

    echo "</table>";
} else {
    echo "<p style='text-align:center;'>Nenhum livro encontrado.</p>";
}

$conn->close();
?>

</body>
</html>