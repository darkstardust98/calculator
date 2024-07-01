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

// TEST
// console.log(operate(20, "*", 2));
// console.log(operate(20, "/", 2));
// console.log(operate(20, "+", 2));
// console.log(operate(20, "-", 2));

let display_value = "";

function update_display_value() {
    
}

//Number button event listener variable
let button0 = document.getElementById("0");
let button1 = document.getElementById("1");
let button2 = document.getElementById("2");
let button3 = document.getElementById("3");
let button4 = document.getElementById("4");
let button5 = document.getElementById("5");
let button6 = document.getElementById("6");
let button7 = document.getElementById("7");
let button8 = document.getElementById("8");
let button9 = document.getElementById("9");

//Operator button event listener variable
let button_add = document.getElementById("+");
let button_subtract = document.getElementById("-");
let button_multiply = document.getElementById("*");
let button_divide = document.getElementById("/");
let button_equals = document.getElementById("=");
let button0_clear = document.getElementsByClassName("clear");

//Number event listeners
button0.addEventListener('click', function() {
    display_value += "0";
});

button1.addEventListener('click', function() {
    display_value += "1";
});

button2.addEventListener('click', function() {
    display_value += "2";
});

button3.addEventListener('click', function() {
    display_value += "3";
});

button4.addEventListener('click', function() {
    display_value += "4";
});

button5.addEventListener('click', function() {
    display_value += "5";
});

button6.addEventListener('click', function() {
    display_value += "6";
});

button7.addEventListener('click', function() {
    display_value += "7";
});

button8.addEventListener('click', function() {
    display_value += "8";
});

button9.addEventListener('click', function() {
    display_value += "9";
});
