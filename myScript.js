let operator = '';
let previousValue = '';
let currentValue = '';


document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector("#clear");
    let equal = document.querySelector("#equals");
    let decimal = document.querySelector("#decimal");

    let numbers = document.querySelectorAll("#numButton");
    let operators = document.querySelectorAll("#operator");

    let previousScreen = document.querySelector("#previous");
    let currentScreen = document.querySelector("#current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue;
    }))
})

function handleNumber(num){
    if(currentValue.length <= 7){
        currentValue += num;
    }
}

const add = function(a, b) {
    return (a + b);
};

const subtract = function(a, b) {
    return (a - b);
};

const multiply = function(...args){
    let product = 1;
    for (let i = 0; i < args.length; i++) {
        product *= args[i];
    }
    return product;
};

const divide = function(a, b){
    return (a / b);
}


let result = 0;
let displayValue = 0;


function operate(a, operator, b) {
    if (operator === "+") {
       return (result = add(a, b));
    }
    else if (operator === "-"){
        return (result = subtract(a, b));
    }
    else if (operator === "*"){
        return (result = multiply(a, b));
    }
    else if (operator === "/"){
        return (result = divide(a,b));
    }
}

;


console.log(operate(80, "/", 2));