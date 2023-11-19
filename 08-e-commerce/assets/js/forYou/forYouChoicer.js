(() => {
    class ForYouChoicer {
        createContainerChoicer() { 
            const{divContainerChoicer, containerOptions} =  createNoRepeatEl();

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
                spanEl.classList.add("category-name", "font-size-base", "font-wght-400");
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

            function createNoRepeatEl() {
                const divContainerChoicer = document.createElement("div");
                divContainerChoicer.classList.add("container-choicer-for-you");

                const divH1 = document.createElement("div");
                divH1.classList.add("container-title");
                const h1 = document.createElement("h1");
                h1.innerText = "Choose your interests";
                //h1.classList.add("");
                divH1.appendChild(h1);

                const btnSaveInterests = document.createElement("button");
                btnSaveInterests.innerText = "Confirm";
                btnSaveInterests.classList.add("btn-save-interests", "primary-button", "radius-total", "button");
                btnSaveInterests.addEventListener("click", getSelectedInterests);
                const containerBtnSave = document.createElement("div");
                containerBtnSave.classList.add("container-btn-save");
                containerBtnSave.appendChild(btnSaveInterests);

                const containerOptions = document.createElement("div");
                containerOptions.classList.add("container-options");
                divContainerChoicer.appendChild(divH1);
                divContainerChoicer.appendChild(containerOptions);
                divContainerChoicer.appendChild(containerBtnSave);

                return {divContainerChoicer, containerOptions};
            }

            function getSelectedInterests() {
                const inputsCheckbox = document.querySelectorAll(".input-choicer-category");
                let selectedItems = [];

                inputsCheckbox.forEach(value => {
                    if(value.checked) {
                        selectedItems.push(value.parentElement.querySelector(".category-name").innerText);
                    }
                })

                localStorageSave("interestedItems", selectedItems);
                destroyContainerChoicer();
            }

            function destroyContainerChoicer() {
                const divContainerChoicer = document.querySelector(".container-choicer-for-you");
                divContainerChoicer.remove();
            }
        }
    }

    const forYouChoicer = new ForYouChoicer();
    forYouChoicer.createContainerChoicer(); // só criar quando o usuário já não tiver escolhido
})();