let calculated = false;
const digitButtons = document.querySelectorAll('.calc-button');
const display = document.querySelector('.display');
digitButtons.forEach(button => {
    button.addEventListener('click',function(){
        if(calculated === true){
            display.innerHTML = '';
            calculated = false;
        }
        display.innerText += button.innerText;
    });
});

const operatorButtons = document.querySelectorAll('.calc-button-operator');
operatorButtons.forEach(button => {
    button.addEventListener('click',function(){
        if(calculated === true){
            display.innerHTML = '';
            calculated = false;
        }
        else if(button.innerText === '='){
            if(calculated === true){
                return;
            }
            display.innerText = evaluateExpression(display.innerText);
            calculated = true;
            return;
        }
        display.innerText += (' ' + button.innerText + ' ');
    });
});




const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click',function(){
    display.innerText = '';
} );

function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(num1,num2,operator){
    if(operator === '+'){
        return add(num1,num2);
    }
    else if(operator === '-'){
        return subtract(num1,num2);
    }
    else if(operator === '*'){
        return multiply(num1,num2);
    }
    else if(operator === '/'){
        return divide(num1,num2);
    }
}

function evaluateExpression(expression){
    // split on every three values, if theres ever not three values then say not a valid expression
    let expressionArray = [];
    expressionArray = expression.split(' ');
    console.log(expressionArray);
    // got array - now evaluate with bedmas
    // requirements:
    // errors: operator at end of array, operator at start of array, no operator in array - reset display and return error
    // bedmas rules: from left to right: operate on * and / first
    // then operate on + and - from left to right
    // * and / pass
    for(let i = 0; i < expressionArray.length; i++){
        if(expressionArray[i] === '*' || expressionArray[i] === '/'){
            let num1 = parseFloat(expressionArray[i-1]);
            let num2 = parseFloat(expressionArray[i+1]);
            let operator = expressionArray[i];
            let result = operate(num1,num2,operator);
            expressionArray[i-1] = result;
            expressionArray.splice(i,2);
            i = 0;
        }
    }
    // + and - pass
    for(let i = 0; i < expressionArray.length; i++){
        if(expressionArray[i] === '+' || expressionArray[i] === '-'){
            let num1 = parseFloat(expressionArray[i-1]);
            let num2 = parseFloat(expressionArray[i+1]);
            let operator = expressionArray[i];
            let result = operate(num1,num2,operator);
            expressionArray[i-1] = result;
            expressionArray.splice(i,2);
            i = 0;
        }
    }
    return expressionArray[0];
}