const itemCartDiv = document.querySelector(".items-cats-added");
let pricesItems = {};
let paragraphPrices = {};

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
    let catImageContainer = document.querySelectorAll(".cat-image-container");
    for(item of catImageContainer) {
        let imgNameId = String(item.querySelector("img").getAttribute("src"));
        let paragraphPart = item.parentElement.parentElement.querySelector(".price-container > .price-paragraph > .accent-price");
        paragraphPrices[imgNameId] = paragraphPart;
    }
    console.log(itemsAdded);
    console.log(pricesItems);
}
