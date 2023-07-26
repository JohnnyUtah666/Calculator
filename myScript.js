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

console.log(add(2, 4));
console.log(subtract(2, 4));
console.log(multiply(2, 4));
console.log(divide(2, 4));