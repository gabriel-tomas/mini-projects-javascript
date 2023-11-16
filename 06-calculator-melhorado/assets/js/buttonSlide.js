(() => {
    const btnDarkSlctr = document.querySelector(".slide-btn");

    btnDarkSlctr.addEventListener("click", () => {
        const mode = alternateMode();
        saveModeInStorage("darkMode", mode);
    });
})();

const insideCircle = document.querySelector(".inside-circle");

function alternateMode() {
    let valueMode;

    if (getComputedStyle(insideCircle).left === "0px") {
        insideCircleChangeLeft(true);
        valueMode = darkMode();
    } else {
        insideCircleChangeLeft(false);
        valueMode = whiteMode();
    }

    return valueMode;
}

function insideCircleChangeLeft(change) {
    change? insideCircle.style.left = "calc(70px - 30px)" : insideCircle.style.left = "0px";
}

function whiteMode() {
    document.documentElement.style.setProperty("--main-background", "#a0acbf");
    return false;
}

function darkMode() {
    document.documentElement.style.setProperty("--main-background", "#0D1624");
    return true;
}