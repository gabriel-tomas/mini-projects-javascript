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
            for(let i in array) {
                productsMethods.setCategoryProducts(array[i], e => {
                    const rand = Math.round(Math.random() * (e.products.length - 0) + 0);
                    for(let product of e.products) {
                        this.addProductCard(product);
                    }
                })
            }
        }

        addProductCard(productObj) {
            const forYouProducts = document.querySelector(".for-you-products");
            const product = new createProductCard(productObj).create();
            forYouProducts.appendChild(product);
        }
    }

    // starter
    new ForYou().create();
})();
