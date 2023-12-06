import getQuantityItems from "./getQuantityItems.js";
import getProductsId from "./getProductsId.js";
import CartProductCard from "./cartProductCard.js";
import productsMethods from '../../productApi.js';

(() => {
    const idsAndQuantitys = getQuantityItems(getProductsId());
    if(Object.keys(idsAndQuantitys)[0] === "null") return;
    requestItems(idsAndQuantitys);

    function requestItems(idsQuantitys) {
        for(let [id, quantity] of Object.entries(idsQuantitys)) {
            productsMethods.getSingleProduct(id, res => {
                if(quantity > 1) {
                    const product = new CartProductCard(res, quantity);
                    product.create();
                } else {
                    new CartProductCard(res).create();
                }
            });
        }
    }
})();