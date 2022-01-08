const power = document.getElementById("on");
const ecran = document.getElementById("screen");
let isOn = false;

power.addEventListener("click", () => {
    if (isOn === false) {
        ecran.innerText = "0";
        power.style.justifyContent = "flex-end";
        isOn = true;
    } else {
        ecran.innerText = "";
        power.style.justifyContent = "flex-start";
        isOn = false;
    }
});