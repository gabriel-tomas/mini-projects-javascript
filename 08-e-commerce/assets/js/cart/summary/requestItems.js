import getQuantityItems from "../myCart/getQuantityItems.js";
import getProductsId from "../myCart/getProductsId.js";

function Summary(total) {
    this.total = String(total.toFixed(2)).replace(".", ",");
    Object.defineProperty(this, "inCash", {
        enumerable: true,
        configurable: false,
        get: function() {
            const inCash = String((total - (total * .15)).toFixed(2)).replace(".", ",");
            return inCash;
        }
    })
    Object.defineProperty(this, "cardInstallments12", {
        enumerable: true,
        configurable: false,
        get: function() {
            const installments = String((total / 12).toFixed(2));
            return installments;
        }
    })
}

Summary.prototype.updateSummary = function() {
    const totalPrice = document.querySelector(".total-price > span");
    totalPrice.innerText = `$ ${this.total}`;

    const inCash = document.querySelector(".price-incash");
    inCash.innerText = `$ ${this.inCash}`;

    const priceCard = document.querySelector(".price-card");
    priceCard.innerText = `$ ${this.total}`;

    const containerCard = document.querySelector(".container-card > p > span");
    containerCard.innerText = `$ ${this.cardInstallments12}`;
};



(() => {
    const idsAndQuantitys = getQuantityItems(getProductsId());
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
                    new Summary(totalValue).updateSummary();
                };
                counter++;
            });
        }
    }
})();
