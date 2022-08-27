const buttons = document.querySelectorAll('.calc-button');
const display = document.querySelector('.display');
console.log(buttons);
buttons.forEach(button => {
    button.addEventListener('click',function(){
        display.innerText += button.innerText;
    });
});

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click',function(){
    display.innerText = '';
} );

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click',function(){

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

function evaluateExpression(){
    return "unimplemented";
}