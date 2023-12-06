import productsMethods from "../productApi";
import ProductCard from "../productCard";
import {localStorageGet} from "../localStorageSaverAndGet";

(() => {
    class ForYou {
        constructor() {
            Object.defineProperty(this, "interests", {
                enumerable: true,
                configurable: false,
                get: function() {
                    return localStorageGet("interestedItems");
                }
            })
        }

        create() {
            if(this.interests) {
                this.separateInterestItems(this.interests);
                return;
            };
            this.randomCategories().then(array => {
                this.separateInterestItems(array);
            });
        }

        randomCategories() {
            return new Promise((resolve, reject) => {
                let arrayRandomCategories = [];
                productsMethods.getAllCategories(categories => {
                    for(let i = 0; i < 4; i++) {
                        const randomValue = getRandom(categories.length);
                        if(categories[randomValue]) arrayRandomCategories.push(categories[randomValue]);
                    }
                    resolve(arrayRandomCategories);
                });
                function getRandom(max) {
                    return Math.round(Math.random() * (max - 0) + 0);
                }
            })
        }
        
        separateInterestItems(array) {
            const rands = [randNum(), randNum(), randNum(), randNum(), randNum()]
            const maxProductToAdd = 5;
            let numRand = 0;

            for(let i in array) {
                productsMethods.setCategoryProducts(array[i], e => {
                    for(let product in e.products) {
                        if(product == rands[numRand]) {
                            this.addProductCard(e.products[product])
                            numRand++;
                            if(numRand === maxProductToAdd) return;
                        };
                    }
                })
            }

            function randNum() {
                return Math.round(Math.random() * (4 - 0) + 0);
            }
        }

        addProductCard(productObj) {
            const forYouProducts = document.querySelector(".for-you-products");
            const product = new ProductCard(productObj).create();
            forYouProducts.appendChild(product);
        }
    }

    // starter
    new ForYou().create();
})();
