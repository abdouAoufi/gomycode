const power = document.getElementById("on");
const ecran = document.getElementById("screen");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const plus = document.getElementById("plus");
const equal = document.getElementById("equal");
const zero = document.querySelector("#zero");
const reset = document.querySelector("#reset");
const del = document.querySelector("#delete");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const devide = document.querySelector("#devide");

let currentNumber = "";
let isOn = false;
let n1 = "";
let n2 = "";
let operation = "";

function on() {
    ecran.innerText = "0";
    power.style.justifyContent = "flex-end";
    isOn = !isOn;
}

function off() {
    ecran.innerText = "";
    currentNumber = "";
    n1 = "";
    power.style.justifyContent = "flex-start";
    isOn = !isOn;
}

del.onclick = () => {
    if (currentNumber.length === 1) {
        currentNumber = "0";
    } else {
        // currentNumber = currentNumber.slice(0, currentNumber.length - 1);
        currentNumber = currentNumber.slice(0, -1);
    }
    if (n1.length > 0) {
        ecran.innerText = n1 + operation + currentNumber;
    } else {
        ecran.innerText = currentNumber;
    }
};

power.addEventListener("click", function() {
    if (isOn === false) {
        on();
    } else {
        off();
    }
});
reset.onclick = () => {
    currentNumber = "";
    n1 = "";
    ecran.innerText = "0";
};

function handleNumbers(number) {
    if (isOn === true) {
        if (currentNumber.length <= 10) {
            currentNumber = currentNumber + number;
            if (n1.length > 0) {
                ecran.innerText = n1 + operation + currentNumber;
            } else {
                ecran.innerText = currentNumber;
            }
        }
    } else {
        alert("please turn me on");
    }
}

one.onclick = function() {
    // ES5
    handleNumbers("1");
};

two.onclick = () => {
    // ES6
    handleNumbers("2");
};

three.onclick = () => handleNumbers("3"); // ES6+
four.onclick = () => handleNumbers("4"); // ES6+
five.onclick = () => handleNumbers("5"); // ES6+
six.onclick = () => handleNumbers("6"); // ES6+
seven.onclick = () => handleNumbers("7"); // ES6+
eight.onclick = () => handleNumbers("8"); // ES6+
nine.onclick = () => handleNumbers("9"); // ES6+
zero.onclick = function() {
    handleNumbers("0");
};

// STAY DRY dont repeat yourself

plus.addEventListener("click", () => {
    n1 = currentNumber;
    currentNumber = "";
    operation = "+";
    ecran.innerText = n1 + operation;
});

minus.onclick = function() {
    n1 = currentNumber;
    currentNumber = "";
    operation = "-";
    ecran.innerText = n1 + operation;
};

multiply.onclick = () => {
    n1 = currentNumber;
    currentNumber = "";
    operation = "x";
    ecran.innerText = n1 + operation;
};

devide.onclick = () => {
    n1 = currentNumber;
    currentNumber = "";
    operation = "/";
    ecran.innerText = n1 + operation;
};

equal.addEventListener("click", function() {
    let number1 = parseInt(n1);
    let number2 = parseInt(currentNumber);
    let result = 0;
    /* if (operation === "+") {
          result = number1 + number2;
      } else if (operation === "-") {
          result = number1 - number2;
      } else if (operation === "x") {
          result = number1 * number2;
      } else {
          result = number1 / number2;
      } */
    switch (operation) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "x":
            result = number1 * number2;
            break;
        default:
            result = number1 / number2;
    }
    n1 = "";
    currentNumber = result.toString();
    ecran.innerText = currentNumber;
});