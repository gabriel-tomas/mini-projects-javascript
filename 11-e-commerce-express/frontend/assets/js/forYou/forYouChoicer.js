import productsMethods from "../productApi";
import {localStorageSave, localStorageGet} from "../localStorageSaverAndGet";

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

                const divTop = document.createElement("div");
                divTop.classList.add("container-top");
                const h1 = document.createElement("h1");
                h1.classList.add("font-size-lg");
                h1.innerText = "Choose your interests";
                const btnClose = document.createElement("button");
                btnClose.classList.add("btn-close-choicer");
                btnClose.addEventListener("click", destroyContainerChoicer);
                const spanIconClose = document.createElement("span");
                spanIconClose.classList.add("material-symbols-outlined", "font-size-xl");
                spanIconClose.innerText = "close";
                btnClose.appendChild(spanIconClose);
                divTop.appendChild(h1);
                divTop.appendChild(btnClose);

                const btnSaveInterests = document.createElement("button");
                btnSaveInterests.innerText = "Confirm";
                btnSaveInterests.classList.add("btn-save-interests", "primary-button", "radius-total", "button");
                btnSaveInterests.addEventListener("click", getSelectedInterests);
                const containerBtnSave = document.createElement("div");
                containerBtnSave.classList.add("container-btn-save");
                containerBtnSave.appendChild(btnSaveInterests);

                const containerOptions = document.createElement("div");
                containerOptions.classList.add("container-options");
                divContainerChoicer.appendChild(divTop);
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

    // starter
    const forYouChoicer = new ForYouChoicer();
    if(!localStorageGet("interestedItems")) forYouChoicer.createContainerChoicer();
})();