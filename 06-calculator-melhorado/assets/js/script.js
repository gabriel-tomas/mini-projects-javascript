(() => {
    const containerBtns = document.querySelector(".container-btns");
    const btnMenu = document.querySelector(".btn-menu");

    containerBtns.addEventListener("click", e => {
        const el = e.target;
        const calc = new Calc();
        calc.btnClick = el;
    });

    btnMenu.addEventListener("click", () => {
        const menu = document.querySelector(".container-menu");
        
        menu.style.display === "block"? menu.style.display = "none" : menu.style.display = "block";
    });

    function Calc() {
        const containerResultado = document.querySelector(".container-resultado");

        const addToInput = (...args) => containerResultado.value += args[0];
        
        const doCalc = () => containerResultado.value = eval(containerResultado.value);

        const clearInput = () => containerResultado.value = "";
        
        const eraseInput = () => containerResultado.value = containerResultado.value.slice(0,-1);
        
        Object.defineProperty(this, "btnClick", {
            enumerable: false,
            configurable: false,
            set: function(el) {
                const expressionBtn = "expression-btn";
                const eqBtn = "equal-btn";
                const clearBtn = "clear-btn";
                const eraseBtn = "erase-btn";
    
                if(el.classList.contains(expressionBtn)) {
                    addToInput(el.innerText);
                };
                if(el.classList.contains(eqBtn)) {
                    doCalc();
                };
                if(el.classList.contains(clearBtn)) {
                    clearInput();
                };
                if(el.classList.contains(eraseBtn)) {
                    eraseInput();
                };
            }
        });
    }
})();