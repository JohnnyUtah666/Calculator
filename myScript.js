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

let num1;
let op;
let num2;

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



console.log(operate(80, "/", 2));