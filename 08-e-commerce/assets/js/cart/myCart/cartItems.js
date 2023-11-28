import getQuantityItems from "./getQuantityItems.js";
import getProductsId from "./getProductsId.js";

(() => {
    const IdsAndQuantitys = getQuantityItems(getProductsId());
    requestItems(IdsAndQuantitys);

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