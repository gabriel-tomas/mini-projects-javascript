import {localStorageGet} from "../localStorageSaverAndGet";

export default function checkCart() {
    const itemsCart = localStorageGet("cart-items");
    
    if(itemsCart === null) {
        document.querySelector("section.cart").style.display = "none";
        document.querySelector("section.empty-cart").style.display = "block";
    } else {
        document.querySelector("section.empty-cart").style.display = "none";
    }
}

checkCart();