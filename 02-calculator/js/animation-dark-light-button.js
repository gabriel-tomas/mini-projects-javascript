function DarkLightButton() {
    const buttonDarkLight = document.querySelector("#light-dark-mode-button");
    const selectorDarkLight = document.querySelector("#light-dark-mode-button >  .selector-dark-light");
    let buttonActived = false;

    function activeDesactive() {
        if(!buttonActived) {
            selectorDarkLight.style.right = "0px";
            buttonDarkLight.style.backgroundColor = "black";
            selectorDarkLight.style.backgroundColor = "white";
            buttonActived = true;
            changeTheme("dark");
        } else {
            selectorDarkLight.style.right = "calc(100% - 33px)";
            selectorDarkLight.removeAttribute("right");
            buttonDarkLight.style.backgroundColor = "white";
            selectorDarkLight.style.backgroundColor = "black";
            buttonActived = false;
            changeTheme("white");
        }
    }

    function changeTheme(theme) {
        if(theme === "dark") {
            document.documentElement.style.setProperty("--color0", "rgb(33, 33, 33)")
            document.documentElement.style.setProperty("--color1", "rgb(117, 117, 117)")
            document.documentElement.style.setProperty("--text-color", "rgb(234, 234, 234)")
            document.documentElement.style.setProperty("--color2", "rgb(78, 78, 78)")
        } else if(theme == "white") {
            document.documentElement.style.setProperty("--color0", "rgb(61, 61, 61)")
            document.documentElement.style.setProperty("--color1", "rgb(228, 228, 228)")
            document.documentElement.style.setProperty("--text-color", "#000")
            document.documentElement.style.setProperty("--color2", "rgb(244, 244, 244)")
        }
    }
    
    buttonDarkLight.addEventListener("mousedown", activeDesactive);
}

DarkLightButton();