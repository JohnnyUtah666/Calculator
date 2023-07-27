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

function operate(a, operator, b) {
    if (operator === "+") {
        add(a, b);
    }
}



console.log(operate(2, "+", 4));