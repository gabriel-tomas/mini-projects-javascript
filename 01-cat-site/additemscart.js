const itemCartDiv = document.querySelector(".items-cats-added");

function addToCart(picture, price) {
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
            <p class="price-paragraph">${price}</p>
        </div>
        <div class="add-more-remove-container">
            <button>
                <span class="material-symbols-outlined">add</span>
            </button>
            <button>
                <span class="material-symbols-outlined">remove</span>
            </button>
        </div>
    </div>
</div>`
}
