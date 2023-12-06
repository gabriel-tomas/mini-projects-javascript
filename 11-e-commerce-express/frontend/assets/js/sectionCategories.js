import productsMethods from "./productApi";
(() => {
    function createCategory(text) {
        (function create() {
            const containerCategories = document.querySelector(".container-categories");
            const tree = createTreeEl();
    
            containerCategories.appendChild(tree);
        })();
    
        function createTreeEl() {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("container-category");
            const btn = document.createElement("button");
            btn.classList.add("btn-category");
            const h1 = document.createElement("h2");
            h1.classList.add("font-size-base", "font-wght-400");
            h1.innerText = text;
            btn.appendChild(h1);
            parentDiv.appendChild(btn);
            return parentDiv;
        }
    }
    
    productsMethods.getAllCategories((e) => {
        e.forEach(value => {
            createCategory(value);
        });
    })
})()