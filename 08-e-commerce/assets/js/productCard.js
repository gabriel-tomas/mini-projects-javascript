class createProductCard {
    constructor(product) {
        //console.log(product);
        this.thumbnail = product.thumbnail;
        this.title = product.title;
        this.price = product.price;
        this.discountPercentage = product.discountPercentage;
        this.id = product.id;
    }

    create() {
        const divParent = this.divParent;
        const containerAndThumb = this.containerAndThumb;
        const bottomInfo = this.bottomInfos;

        divParent.querySelector(".product-link").appendChild(containerAndThumb);
        divParent.querySelector(".product-link").appendChild(bottomInfo);

        return divParent;
    }

    get divParent() {
        const div = document.createElement("div");
        div.setAttribute("id", this.id);
        div.classList.add("container-product");
        
        const a = document.createElement("a");
        a.classList.add("product-link");
        a.setAttribute("href", `product.html?product;id=${this.id}`);

        div.append(a);

        return div;
    }

    get containerAndThumb() {
        const div = document.createElement("div");
        div.classList.add("container-thumbnail");

        const img = document.createElement("img");
        img.setAttribute("src", this.thumbnail);
        div.appendChild(img);

        return div;
    }

    get bottomInfos() {
        const div = document.createElement("div");
        div.classList.add("container-bottom-infos");

        const divTitle = document.createElement("div");
        divTitle.classList.add("container-title");
        const spanTitle = document.createElement("span");
        spanTitle.classList.add("normal-font", "font-size-base");
        spanTitle.innerText = this.title;
        divTitle.appendChild(spanTitle);

        const divPriceAndOthers = document.createElement("div");
        divPriceAndOthers.classList.add("container-price-and-others");
        const spanPrice = document.createElement("span");
        spanPrice.classList.add("span-price", "normal-font", "font-size-md");
        spanPrice.innerText = `$ ${this.price}`;
        const discount = document.createElement("span");
        discount.classList.add("discount", "normal-font");
        discount.innerText = `${this.discountPercentage}% OFF`;
        divPriceAndOthers.appendChild(spanPrice);
        divPriceAndOthers.appendChild(discount);

        div.appendChild(divTitle);
        div.appendChild(divPriceAndOthers);

        return div;
    }
}