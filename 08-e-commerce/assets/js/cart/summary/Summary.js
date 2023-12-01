function Summary() {}

Summary.prototype.setInitial = function(total) {
    this.basePrice = total;
    Object.defineProperty(this, "total", {
        enumerable: true,
        configurable: true,
        get: function() {
            return String(this.basePrice.toFixed(2)).replace(".", ",");
        }
    })
    Object.defineProperty(this, "inCash", {
        enumerable: true,
        configurable: false,
        get: function() {
            const inCash = String((this.basePrice - (this.basePrice * .15)).toFixed(2)).replace(".", ",");
            return inCash;
        }
    })
    Object.defineProperty(this, "cardInstallments12", {
        enumerable: true,
        configurable: false,
        get: function() {
            const installments = String((this.basePrice / 12).toFixed(2));
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

Summary.prototype.updateTotal = function(method, value) {
    if(method === "remove") {
        this.basePrice -= value;
    }
    if(method === "add") {
        this.basePrice += value;
    }
    if(method === "clearAll") {
        this.basePrice = 0;
    }
}

const summary = new Summary();

export default summary;