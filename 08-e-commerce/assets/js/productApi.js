(() => {
    class Products {
        constructor() {
            this.mainRoute = 'https://dummyjson.com';
            this.allProductsRoute = `${this.mainRoute}/products`;
            let searchLink = "";
            Object.defineProperty(this, "setSearchRoute", {
                get: function() {
                    return searchLink;
                },
                set: function(value) {
                    if(typeof value !== "string") return;
                    searchLink = `${this.mainRoute}/products/search?q=${value}`;
                }
            })
            this.allCategoriesRoute = `${this.mainRoute}/products/categories`;
            let searchCategory = "";
            Object.defineProperty(this, "setCategoryRoute", {
                get: function() {
                    return searchCategory;
                },
                set: function(value) {
                    if(typeof value !== "string") return;
                    searchCategory = `${mainRoute}/products/category/${value}`;
                }
            })
        }

        fetchRoute(route, callback) {
            fetch(route).then(res => {
                res.json().then(data => {
                    if(callback) callback(data);
                });
            });
        }

        getAllProducts(callback) {
            this.fetchRoute(this.allProductsRoute, callback);
        }

        setSearchProducts(input) {
            this.setSearchRoute = input;
            this.fetchRoute(this.setSearchRoute, callback);
        }
        
        getAllCategories(callback) {
            this.fetchRoute(this.allCategoriesRoute, callback);
        }
    }

    function createCategory(text) {
        function create() {
            const sectionCategories = document.querySelector(".section-categories");
            const tree = createTreeEl();

            sectionCategories.appendChild(tree);
        }

        function createTreeEl() {
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("container-category");
            const h1 = document.createElement("h1");
            h1.innerText = text;
            parentDiv.appendChild(h1);
            return parentDiv;
        }
        create();
    }

    const productsMethods = new Products();

    productsMethods.getAllCategories((e) => {
        e.forEach(value => {
            createCategory(value);
        });
    })
})();
