import summary from "./summary/Summary.js";
import {localStorageRemove} from '../localStorageSaverAndGet.js';
import checkCart from "./checkCart.js";

(() => {
    const cleanCartBtn = document.querySelector(".clean-cart");

    cleanCartBtn.addEventListener("click", cleanCart)

    function cleanCart() {
        const itemsCart = document.querySelectorAll(".items-cart > .item-cart");

        itemsCart.forEach(value => {
            value.remove();
        })

        localStorageRemove("cart-items");
        summary.updateTotal("clearAll");
        summary.updateSummary();
        checkCart();
    }
})();