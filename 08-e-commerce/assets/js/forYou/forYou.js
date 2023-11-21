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
                this.createProductsCard(this.interests);
                return;
            };
            randomCategories().then(array => {
                this.createProductsCard(array);
            });
        
            function randomCategories() {
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
        }

        createProductsCard(array) {
            console.log(array);
            for(let interests of array) {
                productsMethods.setCategoryProducts(interests, e => {
                    console.log(e.products);
                })
            }
        }

        
    }

    const forYou = new ForYou().create();
    
})();