import getQuantityItems from "../myCart/getQuantityItems.js";
import getProductsId from "../myCart/getProductsId.js";
import CartProductCard from "../myCart/cartProductCard.js";
import summary from "./Summary.js";
import productsMethods from '../../productApi.js';

(() => {
    const idsAndQuantitys = getQuantityItems(getProductsId());
    if(Object.keys(idsAndQuantitys)[0] === "null") return;
    requestItems(idsAndQuantitys);

    function requestItems(idsQuantitys) {
        let counter = 0
        let totalValue = 0;
        
        for(let [id, quantity] of Object.entries(idsQuantitys)) {
            productsMethods.getSingleProduct(id, res => {
                let product;
                if(quantity > 1) {
                    product = new CartProductCard(res, quantity);
                } else {
                    product = new CartProductCard(res);
                }
                totalValue += Number(product.totalPrice);
                if(Object.keys(idsAndQuantitys).length - 1 === counter) {
                    summary.setInitial(totalValue)
                    summary.updateSummary();
                };
                counter++;
            });
        }
    }
})();