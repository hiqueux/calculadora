const resultado = document.querySelector(".resultado");
const botão = document.querySelectorAll(".botão button");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

function updateResultado(originClear = false) {
    resultado.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

