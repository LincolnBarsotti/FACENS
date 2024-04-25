
function calculadora() {
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    alert("Soma: " + somar(n1, n2) + ", divisão: " + dividir(n1, n2) + ", subtração: " + subtrair(n1, n2) + ", multiplição: " + multiplicar(n1, n2));
}

function somar(n1, n2) {
    return parseInt(n1) + parseInt(n2);
}

function dividir(n1, n2) {
    return parseInt(n1) / parseInt(n2);
}

function subtrair(n1, n2) {
    return parseInt(n1) - parseInt(n2);
}

function multiplicar(n1, n2) {
    return parseInt(n1) * parseInt(n2);
}

function loopDe10A100() {
    var list = document.getElementById("exe2");
    var elemento = document.createElement("p");
    elemento.className = "elemento";
    for (let index = 10; index <= 100; index++) {
        if (index == 100) {
            elemento.textContent += index + ".";
            list.appendChild(elemento);
        } else {
            elemento.textContent += index + ", ";
            list.appendChild(elemento);
        }
    }
}

function tabuada() {
    var cinco = 5;
    var list = document.getElementById("exe3");
    for (let i = 0; i <= 10; i++) {
        var elemento = document.createElement("li");
        elemento.className = "elemento";
        elemento.textContent = i + " + " + 5 + " = " + i * cinco;
        list.appendChild(elemento);
    }
}

function tabuadaDigitada() {
    var list = document.getElementById("exe4");
    var n3 = document.getElementById("n3").value;
    for (let i = 0; i <= 10; i++) {
        var elemento = document.createElement("li");
        elemento.className = "resultado";
        elemento.textContent = i + " + " + 5 + " = " + i * parseInt(n3);
        list.appendChild(elemento);
    }
}

function calculadora2() {
    let n1 = document.getElementById("n4").value;
    let n2 = document.getElementById("n5").value;
    let n3 = document.getElementById("operacao").value;
    switch (n3) {
        case "+":
            alert(somar(n1, n2))
            break;
        case "-":
            alert(subtrair(n1, n2))
            break;
        case "/":
            alert(dividir(n1, n2))
            break;
        case "*":
            alert(multiplicar(n1, n2))
            break;
        default:
            alert("Operação inválida")
            break;
    }
}

function arrayPercorrido() {
    var list = document.getElementById("exe6");
    var ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    ar.forEach(i => {
        if ((i % 2) == 0) {
            var elemento = document.createElement("li");
            elemento.className = "resultado";
            elemento.textContent = i;
            list.appendChild(elemento);
        }
    });
}

function btnCalcular() {

    var custoFabrica = document.getElementById("custoFabrica").value;
    var percDistribuidor = document.getElementById("percDistribuidor").value;
    var percImpostos = document.getElementById("percImpostos").value;
    var custoFinal = document.getElementById("valorfinal");

    var resultado = parseInt(custoFabrica) +
        (parseInt(custoFabrica) * parseInt(percDistribuidor)) +
        (parseInt(custoFabrica) * parseInt(percImpostos));

    custoFinal.value = resultado;
}

loopDe10A100();
tabuada();
arrayPercorrido();
