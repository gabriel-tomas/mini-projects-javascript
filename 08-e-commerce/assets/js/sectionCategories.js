(() => {
    function createCategory(text) {
        (function create() {
            const sectionCategories = document.querySelector(".section-categories");
            const tree = createTreeEl();
    
            sectionCategories.appendChild(tree);
        })();
    
        function createTreeEl() {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("container-category");
            const btn = document.createElement("button");
            btn.classList.add("btn-category");
            const h1 = document.createElement("h1");
            h1.classList.add("font-size-base");
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