let resultValue = document.getElementById('result');
let btn1 = document.getElementById('btn-1');
let btn2 = document.getElementById('btn-2');
let btn3 = document.getElementById('btn-3');
let btn4 = document.getElementById('btn-4');
let btn5 = document.getElementById('btn-5');
let btn6 = document.getElementById('btn-6');
let btn7 = document.getElementById('btn-7');
let btn8 = document.getElementById('btn-8');
let btn9 = document.getElementById('btn-9');
let btn0 = document.getElementById('btn-0');
let btnDecimal = document.getElementById('btn-decimal');

btn1.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '1';
    } else {
        resultValue.textContent += '1';
    }
}

btn2.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '2';
    } else {
        resultValue.textContent += '2';
    }
}

btn3.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '3';
    } else {
        resultValue.textContent += '3';
    }
}

btn4.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '4';
    } else {
        resultValue.textContent += '4';
    }
}

btn5.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '5';
    } else {
        resultValue.textContent += '5';
    }
}

btn6.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '6';
    } else {
        resultValue.textContent += '6';
    }
}

btn7.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '7';
    } else {
        resultValue.textContent += '7';
    }
}

btn8.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '8';
    } else {
        resultValue.textContent += '8';
    }
}

btn9.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '9';
    } else {
        resultValue.textContent += '9';
    }
}

btn0.onclick = function() {
    if (resultValue.textContent === '0') {
        resultValue.textContent = '0';
    } else {
        resultValue.textContent += '0';
    }
}

btnDecimal.onclick = function() {
    if (!resultValue.textContent.includes('.')) {
        resultValue.textContent += '.';
    }
}

let AC = document.getElementById('btn-clear');
let btnSign = document.getElementById('btn-sign');
let btnPercent = document.getElementById('btn-percent');
let btnDivide = document.getElementById('btn-divide');
let btnMultiply = document.getElementById('btn-multiply');
let btnSubtract = document.getElementById('btn-subtract');
let btnAdd = document.getElementById('btn-add');
let btnEqual = document.getElementById('btn-equal');

let operator = '';
let firstValue = '';
let waitingForSecondNumber = false;
let result = '';

AC.onclick = function() {
    resultValue.textContent = '0';
    firstValue = '';
    operator = '';
    waitingForSecondNumber = false;
    result = '';
}

btnSign.onclick = function() {
    if (resultValue.textContent[0] === '-') {
        resultValue.textContent = resultValue.textContent.slice(1);
    } else {
        resultValue.textContent = '-' + resultValue.textContent;
    }
}

btnPercent.onclick = function() {
    let num = parseFloat(resultValue.textContent);
    resultValue.textContent = (num / 100).toFixed(2);
}

function performCalculation() {
    let secondValue = resultValue.textContent;
    let calculation;

    switch (operator) {
        case '+':
            calculation = parseFloat(result) + parseFloat(secondValue);
            break;
        case '-':
            calculation = parseFloat(result) - parseFloat(secondValue);
            break;
        case '*':
            calculation = parseFloat(result) * parseFloat(secondValue);
            break;
        case '/':
            calculation = parseFloat(result) / parseFloat(secondValue);
            break;
        default:
            return;
    }

    result = calculation.toString();
    resultValue.textContent = result;
}

function setOperator(op) {
    if (waitingForSecondNumber) {
        performCalculation();
    } else {
        result = resultValue.textContent;
    }

    operator = op;
    resultValue.textContent = '0';
    waitingForSecondNumber = true;
}

btnDivide.onclick = function() { setOperator('/'); }
btnMultiply.onclick = function() { setOperator('*'); }
btnSubtract.onclick = function() { setOperator('-'); }
btnAdd.onclick = function() { setOperator('+'); }

btnEqual.onclick = function() {
    if (waitingForSecondNumber) {
        performCalculation();
        operator = '';
        waitingForSecondNumber = false;
    }
}
