import {localStorageGet} from '../../localStorageSaverAndGet';

export default function getProductsId() {
    let itemsAdded;
    let array = [];
    try {
        itemsAdded = localStorageGet("cart-items").split(",");
        itemsAdded = itemsAdded.map(value => {
            array.push(value.trim());
        });
    } catch(e) {
        itemsAdded = localStorageGet("cart-items");
        array.push(itemsAdded);
    }
    
    return array;
}