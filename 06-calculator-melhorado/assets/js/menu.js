(() => {
    const btnMenu = document.querySelector(".btn-menu");
    let changeWdth = true;

    btnMenu.addEventListener("click", () => {
        const menu = document.querySelector(".container-menu");
        
        if (menu.style.display === "flex") {
            menu.style.display = "none" 
        } else {
            menu.style.display = "flex";
        }

        expandAnimation();
        opacityAnimation();
    });

    function expandAnimation() {
        if (changeWdth === true) {
            btnMenu.style.width = "calc(clamp(250.031px, 25%, 320px) - 10px)";
            changeWdth = false;
            return;
        }
        btnMenu.style.width = "calc(46.797px + (23.328px * 2))";
        changeWdth = true;
    }

    function opacityAnimation() {
        const menu = document.querySelector(".menu");

        if (menu.classList.contains("opcty-1")) {
            menu.classList.remove("opcty-1");
            menu.style.filter = "blur(5px)";
            return;
        }
        menu.classList.add("opcty-1");
        menu.style.filter = "blur(0px)";
    }
})();