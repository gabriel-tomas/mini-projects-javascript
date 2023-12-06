import productsMethods from "./productApi";
import ProductCard from "./productCard";

export default class SectionTopic {
    constructor() {
        
    }

    async topRate() {
        const allProducts = await this.getAllProducts();
        const filteredProducts = this.check45Rate(allProducts, 10);

        this.addToParent(".container-top-rated-products", filteredProducts);
    }

    addToParent(parent, productsToAdd) {
        if(typeof parent !== "string") console.warn("parent must be a string css selector");

        parent = document.querySelector(parent);

        productsToAdd.forEach(product => {
            parent.appendChild(new ProductCard(product).create());
        });
    }

    getAllProducts() {
        return new Promise((resolve) => {
            productsMethods.getAllProducts(0, 100, products => {
            resolve(products);
        })});
    }

    check45Rate(products, numberProducts = 10) {
        if(typeof numberProducts !== "number") {
            console.warn("numberProducts must be number");
            return;
        }

        products = products.products;

        let rates = 0;
        let valuesRates = 0;
        
        products.forEach(value => { 
            rates++;
            valuesRates += value.rating;
        });

        const media = valuesRates / rates;

        const allAboveAverage = products.filter((value) => {
            if(value.rating >= media) {
                return true;
            }
        })

        const fromItem = Math.round(Math.random() * ((allAboveAverage.length - numberProducts) - 0)) + 0;
        const toItem = fromItem + numberProducts;

        return allAboveAverage.slice(fromItem, toItem);
    }
}
