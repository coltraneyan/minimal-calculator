let firstOperand = ''
let secondOperand = ''
let currentOperator = ''
let operatorToggle = false;

const numClick = document.querySelectorAll('.btn');
const opClick = document.querySelectorAll('.btn-op');
const runDisplay = document.querySelector('.btn-eq');
const clearDisplay = document.querySelector('.btn-cl');

const display = document.querySelector(".display");

function add(x, y) {
    return parseInt(x) + parseInt(y);
}

function subtract(x,y) { 
    return parseInt(x) - parseInt(y);
}

function divide(x,y) { 
    return x / y;
}

function multiply(x,y) { 
    return x * y;
}

function operate(operator, firstNumber, secondNumber) {
    if (operator === 'multiply') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === 'divide') {
        return divide(firstNumber, secondNumber);
    } else if (operator === 'add') {
        return add(firstNumber, secondNumber);
    } else if (operator === 'subtract') {
        return subtract(firstNumber, secondNumber);
    }
}


for (const num of numClick) {
    num.addEventListener("click", function(e) {
        if (firstOperand === '') {
            firstOperand = num.value;
            display.textContent = `${firstOperand}`;
        } else if (operatorToggle == false) {
            firstOperand = `${firstOperand}${num.value}`;
            display.textContent = `${firstOperand}`;
        } else if (operatorToggle == true) {
            secondOperand = `${secondOperand}${num.value}`
            display.textContent = `${secondOperand}`;
        }
    });
}

for (const op of opClick) {
    op.addEventListener("click", function() {
        if (operatorToggle) {
        firstOperand = operate(currentOperator, firstOperand, secondOperand);
        display.textContent = `${firstOperand}`
        secondOperand = ''
        currentOperator = op.value;
        operatorToggle = true
    } else {
        currentOperator = op.value;
        operatorToggle = true
    }
    })
}

runDisplay.addEventListener("click", function() {
    firstOperand = operate(currentOperator, firstOperand, secondOperand);
    display.textContent = `${firstOperand}`
    secondOperand = ''
    currentOperator = '';
    operatorToggle = false;
})

clearDisplay.addEventListener("click", function() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    display.textContent = `${firstOperand}`
    operatorToggle = false;
})