const resultado = document.querySelector(".resultado");
const botão = document.querySelectorAll(".botão button");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

function updateResultado(originClear = false) {
    resultado.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

function addDigit(digit){
    if (digit === "," && (currentNumber.includes(",") || !currentNumber)) return;

    if (restart) {
        currentNumber = digit;
        restart = false;
    } else {
        currentNumber += digit;
    }

    updateResultado();
}

botão.forEach((button) => {
    buttom.addEventListener("click", () => {
        const buttonText = button.innerText;
        if (/^[0-9,]+$/.test(buttonText)) {
            addDigit(buttonText);
        }
    });
});