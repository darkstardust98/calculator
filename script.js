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
let operator = "";
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
let button_clear = document.getElementById("clear");

//Number event listeners
button0.addEventListener('click', function() {
    display_value += "0";
    document.getElementById("display_value").innerText = display_value;
});

button1.addEventListener('click', function() {
    display_value += "1";
    document.getElementById("display_value").innerText = display_value;
});

button2.addEventListener('click', function() {
    display_value += "2";
    document.getElementById("display_value").innerText = display_value;
});

button3.addEventListener('click', function() {
    display_value += "3";
    document.getElementById("display_value").innerText = display_value;
});

button4.addEventListener('click', function() {
    display_value += "4";
    document.getElementById("display_value").innerText = display_value;
});

button5.addEventListener('click', function() {
    display_value += "5";
    document.getElementById("display_value").innerText = display_value;
});

button6.addEventListener('click', function() {
    display_value += "6";
    document.getElementById("display_value").innerText = display_value;
});

button7.addEventListener('click', function() {
    display_value += "7";
    document.getElementById("display_value").innerText = display_value;
});

button8.addEventListener('click', function() {
    display_value += "8";
    document.getElementById("display_value").innerText = display_value;
});

button9.addEventListener('click', function() {
    display_value += "9";
    document.getElementById("display_value").innerText = display_value;
});


//Operator event listeners
button_add.addEventListener('click', function() {
    first_number = Number(display_value);
    operator = "+";
    display_value = 0;
    document.getElementById("display_value").innerText = display_value;
    console.log(first_number);
});

button_subtract.addEventListener('click', function() {
    first_number = Number(display_value);
    operator = "-";
    display_value = 0;
    document.getElementById("display_value").innerText = display_value;
});

button_multiply.addEventListener('click', function() {
    first_number = Number(display_value);
    operator = "*";
    display_value = 0;
    document.getElementById("display_value").innerText = display_value;
});

button_divide.addEventListener('click', function() {
    first_number = Number(display_value);
    operator = "/";
    display_value = 0;
    document.getElementById("display_value").innerText = display_value;
});

//Equals event listener
button_equals.addEventListener('click', function() {
    console.log(first_number);
    console.log(second_number);
    console.log(operator);
    second_number = Number(display_value);
    display_value = 0;
    second_number = operate(first_number, operator, second_number);
    display_value = Number(second_number);
    document.getElementById("display_value").innerText = display_value;
});

//Clear button event listener
button_clear.addEventListener('click', function() {
    first_number = 0;
    second_number = 0;
    display_value = 0;
    operator = '';
    document.getElementById("display_value").innerText = display_value;
});