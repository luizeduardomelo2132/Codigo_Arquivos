<?php

abstract class Veiculo{
    public string $nome;
    public string $marca;
    private int $num_porta;
    protected string $cor;
    public string $tipo;
    public int $velocidade = 0;


    function __construct(string $nome, string $marca, int $num_porta, string $cor, string $tipo)
    {
    $this->nome = $nome;      
    $this->marca = $marca;
    $this->num_porta = $num_porta;
    $this->cor = $cor;  
    $this->tipo = $tipo;
    }
    abstract public function tipo(): string;

    public function andar(): void {
        $this->velocidade += 20;
        echo "{$this->nome} está andando a {$this->velocidade} km/h<br>";
    }

    public function virar(string $lado): void {
        echo "{$this->nome} virou para a {$lado}<br>";
    }

    public function frear(): void {
        $this->velocidade = 0;
        echo "{$this->nome} freou e parou<br>";
    }

    public function info(): void {
        echo "Marca: {$this->marca}<br>";
        echo "Nome: {$this->nome}<br>";
        echo "Tipo: {$this->tipo()}<br><br>";
    }

}

class Carro extends Veiculo{
    public function tipo(): string {
        return "Carro de Passeio";
    }
}

$uno = new Carro("uno", "fiat", 4, "vermelho", "casual", 50);
$carro->andar();
 

