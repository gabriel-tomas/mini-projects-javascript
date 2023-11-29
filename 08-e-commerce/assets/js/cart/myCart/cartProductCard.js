class CartProductCard extends ProductCard {
    constructor(product, quantity = 1) {
        super(product);
        this.brand = product.brand;
        this.quantity = quantity;
        this.totalPrice = this.price * this.quantity;
        console.log(this.totalPrice, this.quantity);
    }

    create() {
        const div = this.divTableParent;
        const trAndThs = this.trAndThs;
        const trAndTds = this.trAndTds;

        div.querySelector("table").appendChild(trAndThs);
        div.querySelector("table").appendChild(trAndTds);

        this.addToParent(div);
        console.log(this);
    }

    addToParent(product) {
        const itemsCart = document.querySelector(".items-cart");

        itemsCart.appendChild(product);
    }

    get divTableParent() {
        const div = document.createElement("div");
        div.classList.add("item-cart");
        div.setAttribute("product-id", this.id);

        const table = document.createElement("table");
        table.classList.add("table-product");

        div.appendChild(table);

        return div;
    }

    get trAndThs() {
        const tr = document.createElement("tr");
        tr.classList.add("row-headers");
        const headersTitles = ["Product", "Quantity", "Price"];
        for(let i = 0; i < 3; i++) {
            const th = document.createElement("th");
            th.innerText = headersTitles[i];
            tr.appendChild(th);
        }

        return tr;
    }

    get trAndTds() {
        const tr = document.createElement("tr");
        tr.classList.add("row-datas");

        const product = () => {
            const tdProduct = document.createElement("td");
            tdProduct.classList.add("td-product");

            const divImg = document.createElement("div");
            divImg.classList.add("divImg");
            const img = document.createElement("img");
            img.setAttribute("src", this.thumbnail);
            divImg.appendChild(img);

            const divTitle = document.createElement("div");
            divTitle.classList.add("div-title");
            const h3 = document.createElement("h3");
            h3.innerText = this.title;
            divTitle.appendChild(h3);

            const divBrand = document.createElement("div");
            divBrand.classList.add("div-brand");
            const span = document.createElement("span");
            span.innerText = this.brand;
            divBrand.appendChild(span);

            tdProduct.appendChild(divImg);
            tdProduct.appendChild(divTitle);
            tdProduct.appendChild(divBrand);

            return tdProduct;
        }
        
        const quantity = () => {
            const updateQuantityElText = function() {
                spanQuantity.innerText = this.quantity;
            }.bind(this);

            const updateTotalPriceElText = function() {
                this.tagPTotal.innerText = `Total: $ ${this.totalPrice}`;
            }.bind(this);

            const updateSpanTimesElText = function() {
                this.spanTimes.innerText = `${this.quantity}x`;
            }.bind(this);
            
            const tdQuantity = document.createElement("td");
            tdQuantity.classList.add("td-quantity");

            const btnMinus = document.createElement("button");
            btnMinus.classList.add("btn-minus-product");
            btnMinus.innerText = "-";
        
            const spanQuantity = document.createElement("span");
            spanQuantity.classList.add("span-quantity");
            updateQuantityElText();

            const btnPlus = document.createElement("button");
            btnPlus.classList.add("btn-plus-product");
            btnPlus.innerText = "+";

            const addRemoveProduct = function(func) {
                if(func === "add") {
                    this.quantity++;
                    this.totalPrice = this.price * this.quantity;
                    updateTotalPriceElText();
                    updateQuantityElText();
                    updateSpanTimesElText();
                    const addCartItemLclStrg = ProductCard.addCartItemLclStrg.bind(this);
                    addCartItemLclStrg();

                } else if(func === "remove") {
                    if(this.quantity <= 1) {
                        btnMinus.style.pointerEvents = "none";
                        return;
                    };
                    this.quantity--;
                    this.totalPrice = this.price * this.quantity;
                    updateTotalPriceElText();
                    updateQuantityElText();
                    updateSpanTimesElText();
                }
            }.bind(this);

            btnMinus.addEventListener("click", () => {addRemoveProduct("remove")});
            btnPlus.addEventListener("click", () => {addRemoveProduct("add")});

            tdQuantity.appendChild(btnMinus);
            tdQuantity.appendChild(spanQuantity);
            tdQuantity.appendChild(btnPlus);

            return tdQuantity;
        }

        const price = () => {
            const tdPrice = document.createElement("td");
            tdPrice.classList.add("td-price");

            const pValueTimes = document.createElement("p");
            this.spanTimes = document.createElement("span");
            this.spanTimes.innerText = `${this.quantity}x`;
            pValueTimes.innerText += ` $ ${this.price}`;
            pValueTimes.insertAdjacentElement('afterbegin', this.spanTimes);

            this.tagPTotal = document.createElement("p");
            this.tagPTotal.classList.add("p-total");
            this.tagPTotal.innerText = `Total: $ ${this.totalPrice}`;

            tdPrice.appendChild(pValueTimes);
            tdPrice.appendChild(this.tagPTotal);

            return tdPrice;
        }

        tr.appendChild(product());
        tr.appendChild(quantity());
        tr.appendChild(price());

        return tr;
    }
}


