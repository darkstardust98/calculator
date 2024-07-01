function add(num1, num2) {
    let accumulator = num1;
    return accumulator += num2;
}

function subtract(num1, num2) {
    let accumulator = num1;
    return accumulator -= num2;
}

function multiply(num1, num2) {
    let accumulator = num1;
    return accumulator * num2;
}

function divide(num1, num2) {
    let accumulator = num1;
    return accumulator / num2;
}

// TEST
// console.log(add(1,5));
// console.log(subtract(10,5));
// console.log(multiply(2,2));
// console.log(divide(20,5));

let first_number = 0;
let operator = 0;
let second_number = 0;

function operate(num1, operate, num2) {
    let result = 0;
    switch(operate) {
        case "+":
            result = add(num1, num2);
            return result;
            break;
        case "-":
            result = subtract(num1, num2);
            return result;
            break;
        case "*":
            result = multiply(num1, num2);
            return result;
            break;
        case "/":
            result = divide(num1, num2);
            return result;
            break;
    }
        
}


console.log(operate(20, "*", 2));
console.log(operate(20, "/", 2));
console.log(operate(20, "+", 2));
console.log(operate(20, "-", 2));