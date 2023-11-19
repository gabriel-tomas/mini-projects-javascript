(() => {
    class ForYou {
        createContainerChoicer() { 
            const divContainerChoicer = document.createElement("div");
            divContainerChoicer.classList.add("container-choicer-for-you");
            const containerOptions = document.createElement("div");
            containerOptions.classList.add("container-options");
            divContainerChoicer.appendChild(containerOptions);

            productsMethods.getAllCategories((category) => {
                category.forEach(value => {
                    const parentLabel = createTreeElLabels(value);
                    containerOptions.appendChild(parentLabel);
                })
            })

            addChoicerToBody(divContainerChoicer);

            function createTreeElLabels(spanText) {
                const parentLabel = document.createElement("label");
                const spanEl = document.createElement("span");
                spanEl.classList.add("category-name");
                spanEl.innerText = spanText;
                const inputCategoryChoicer = document.createElement("input");
                inputCategoryChoicer.setAttribute("type", "checkbox");
                inputCategoryChoicer.classList.add("input-choicer-category");
                
                parentLabel.appendChild(spanEl);
                parentLabel.appendChild(inputCategoryChoicer);
    
                return parentLabel;
            }

            function addChoicerToBody(containerChoicer) {
                document.body.appendChild(containerChoicer);
            }
        }

        
    }

    const forYou = new ForYou();
    console.log(forYou.createContainerChoicer());
})();