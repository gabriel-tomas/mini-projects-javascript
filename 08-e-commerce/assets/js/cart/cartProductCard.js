
class CartProductCard extends ProductCard {
    constructor(product) {
        super(product);
        this.brand = product.brand;
        this.totalPrice = this.price;
        this.quantity = 1;
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
            const tdQuantity = document.createElement("td");
            tdQuantity.classList.add("td-quantity");

            const btnMinus = document.createElement("button");
            btnMinus.classList.add("btn-minus-product");
            btnMinus.innerText = "-";
            //btnMinus.addEventListener("click", addOrSubtract(false)); << fazer func

            const spanQuantity = document.createElement("span");
            spanQuantity.classList.add("span-quantity");
            spanQuantity.innerText = "1";

            const btnPlus = document.createElement("button");
            btnPlus.classList.add("btn-plus-product");
            btnPlus.innerText = "+";

            tdQuantity.appendChild(btnMinus);
            tdQuantity.appendChild(spanQuantity);
            tdQuantity.appendChild(btnPlus);

            return tdQuantity;
        }

        const price = () => {
            const tdPrice = document.createElement("td");
            tdPrice.classList.add("td-price");

            const pValueTimes = document.createElement("p");
            const span = document.createElement("span");
            span.innerText = `1x`;
            pValueTimes.innerText += ` $ ${this.price}`;
            pValueTimes.insertAdjacentElement('afterbegin', span);;

            const pTotal = document.createElement("p");
            pTotal.innerText = `Total: $ ${this.totalPrice}`;

            tdPrice.appendChild(pValueTimes);
            tdPrice.appendChild(pTotal);

            return tdPrice;
        }

        tr.appendChild(product());
        tr.appendChild(quantity());
        tr.appendChild(price());

        return tr;
    }
}


