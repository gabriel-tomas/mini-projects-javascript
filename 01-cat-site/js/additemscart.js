const itemCartDiv = document.querySelector(".items-cats-added");
let pricesItems = {};
let paragraphPrices = {};
let itemsAddedCounter = 0;

itemCartDiv.innerHTML = "<p class='without-itemsadded'>You don't have any items added</p>";
itemCartDiv.style.width = '300px';

function withOutItems() {
    const pElementWithOut = document.querySelector(".without-itemsadded");

    if(itemsAdded.length === 0) {
        console.log("sem items");
        pElementWithOut.style.display = "block";
    }
    else {
        console.log("com items");
        itemCartDiv.style.width = 'fit-content';
        pElementWithOut.style.display = "none";
    }
}

function countItems() {
    const elementCounter = document.querySelector(".itemsCount > span");
    elementCounter.innerHTML = ++itemsAddedCounter;
    console.log(elementCounter);
    console.log("adicionado mais um item");
}

function addToCart(picture, price) {
    if (itemsAdded.indexOf(picture) != -1) {
        pricesItems[picture] += price;
        paragraphPrices[picture].innerHTML = pricesItems[picture];
    }
    else {
        itemsAdded.push(picture);
        pricesItems[picture] = price;
        itemCartDiv.innerHTML += `<div class="cat-item">
        <div class="left-items">
            <div class="delete-item-container">
                <button class="remove-item">
                    <span class="material-symbols-outlined">delete_forever</span>
                </button>
            </div>
            <div class="cat-image-container">
                <img src="${picture}" alt="">
            </div>
            </div>
            <div class="right-items">
                <div class="price-container">
                    <p class="price-paragraph">Meows: $<span class="accent-price">${price}</p>
                </div>
                <div class="add-more-remove-container">
                    <button class="add-cat">
                        <span class="material-symbols-outlined">add</span>
                    </button>
                    <button class="remove-cat">
                        <span class="material-symbols-outlined">remove</span>
                    </button>
                </div>
            </div>
        </div>`;
        
    }
    countItems();
    let catImageContainer = document.querySelectorAll(".cat-image-container");
    for(item of catImageContainer) {
        let imgNameId = String(item.querySelector("img").getAttribute("src"));
        let paragraphPart = item.parentElement.parentElement.querySelector(".price-container > .price-paragraph > .accent-price");
        paragraphPrices[imgNameId] = paragraphPart;
    }
    withOutItems()
}
