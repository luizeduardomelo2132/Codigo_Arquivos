const x = 10




function somar(n1, n2){
    return n1 + n2
}

function dozemola(nome){
    return "12 mola diferente 12 litro transparente " + nome
}

console.log(somar(10,5))
console.log(somar(20,10))
console.log(dozemola("12 mil pra gastar atoa"))


let titulo = document.getElementById("titulo")


console.log(titulo)


let texto = document.getElementById("texto")


function somarnumeros(){
    let n1 = Number(document.getElementById("n1").value)
      let n2 = Number(document.getElementById("n2").value)
    alert(n1 + n2)

}

function dividirnumeros(){
    let n1 = Number(document.getElementById("n1").value)
      let n2 = Number(document.getElementById("n2").value)
    alert(n1 / n2)

}

function subtrairnumeros(){
    let n1 = Number(document.getElementById("n1").value)
      let n2 = Number(document.getElementById("n2").value)
    alert(n1 - n2)

}

function multiplicarnumeros(){
    let n1 = Number(document.getElementById("n1").value)
      let n2 = Number(document.getElementById("n2").value)
    alert(n1 * n2)

}