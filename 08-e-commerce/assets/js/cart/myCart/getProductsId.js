export default function getProductsId() {
    let itemsAdded = localStorageGet("cart-items").split(",");
    let array = [];
    itemsAdded = itemsAdded.map(value => {
        array.push(value.trim());
    });
    return array;
}