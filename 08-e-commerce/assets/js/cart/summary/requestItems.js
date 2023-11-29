import getQuantityItems from "../myCart/getQuantityItems.js";
import getProductsId from "../myCart/getProductsId.js";

function Summary(total) {
    this.total = total;
    Object.defineProperty(this, "inCash", {
        enumerable: true,
        configurable: false,
        get: function() {
            const inCash = total - (total * .15);
            return inCash;
        }
    })
    Object.defineProperty(this, "cardInstallments12", {
        enumerable: true,
        configurable: false,
        get: function() {
            const installments = total / 12;
            return installments.toFixed(2);
        }
    })
}

console.log(new Summary(980.50).cardInstallments12);

(() => {
    const IdsAndQuantitys = getQuantityItems(getProductsId());
    requestItems(IdsAndQuantitys);

    function requestItems(idsQuantitys) {
        for(let [id, quantity] of Object.entries(idsQuantitys)) {
            productsMethods.getSingleProduct(id, res => {
                let product;
                if(quantity > 1) {
                    product = new CartProductCard(res, quantity);
                } else {
                    product = new CartProductCard(res);
                }
                //console.log(product.totalPrice);
            });
        }
    }
})();
