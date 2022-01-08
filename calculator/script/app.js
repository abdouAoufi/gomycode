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

let currentNumber = "";
let isOn = false;
let n1 = "";
let n2 = "";

power.addEventListener("click", () => {
    if (isOn === false) {
        ecran.innerText = "0";
        power.style.justifyContent = "flex-end";
        isOn = true;
    } else {
        ecran.innerText = "";
        currentNumber = "";
        power.style.justifyContent = "flex-start";
        isOn = false;
    }
});

one.addEventListener("click", function() {
    if (isOn === true) {
        if (currentNumber.length <= 10) {
            currentNumber = currentNumber + "1";
            if (n1.length > 0) {
                ecran.innerText = n1 + "+" + currentNumber;
            } else {
                ecran.innerText = currentNumber;
            }
        }
    } else {
        alert("please turn me on");
    }
});

plus.addEventListener("click", () => {
    n1 = currentNumber;
    currentNumber = "";
    ecran.innerText = n1 + "+";
});

equal.addEventListener("click", function() {
    let result = parseInt(n1) + parseInt(currentNumber);
    ecran.innerText = result;
});