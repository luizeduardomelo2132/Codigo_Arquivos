




<link rel="stylesheet" href="style.css">

<div class="container">
    <h2>Cadastrar</h2>

    <form action="registerr.php" method="POST" onsubmit="return validarform()">
        
    <label>Título:</label><br>
        <input type="text" name="titulo" required><br><br>

        <label>Autor:</label><br>
        <input type="text" name="autor" required><br><br>

        <label>Ano:</label><br>
        <input type="number" name="ano" required><br><br>

        <label>Categoria:</label><br>
        <select name="categoria" required>
            <option value="">Selecione</option>
            <option value="Romance">Romance</option>
            <option value="Ficção">Ficção</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Educação">Educação</option>
        </select><br><br>

        <label>Quantidade:</label><br>
        <input type="number" name="quantidade" required><br><br>

        <input type="submit"><a href="lista.php" class="cor">Clique para ver a lista de livros</a></div>
    </form>
</div>