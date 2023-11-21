class ProductsRoutes {
    constructor() {
        Object.defineProperty(this, "mainRoute", {
            enumerable: true,
            writable: false,
            configurable: false,
            value: 'https://dummyjson.com'
        })
        Object.defineProperty(this, "allProductsRoute", {
            enumerable: true,
            writable: false,
            configurable:false,
            value: `${this.mainRoute}/products`
        })
        let searchLink = null;
        Object.defineProperty(this, "setSearchRoute", {
            get: function() {
                return searchLink;
            },
            set: function(value) {
                if(typeof value !== "string") return;
                searchLink = `${this.mainRoute}/products/search?q=${value}`;
            }
        })
        Object.defineProperty(this, "allCategoriesRoute", {
            enumerable: true,
            writable: false,
            configurable:false,
            value: `${this.mainRoute}/products/categories`
        })
        let searchCategory = null;
        Object.defineProperty(this, "setCategoryRoute", {
            get: function() {
                return searchCategory;
            },
            set: function(value) {
                if(typeof value !== "string") return;
                searchCategory = `${this.mainRoute}/products/category/${value}`;
            }
        })
    }

    static fetchRoute(route, callback) {
        fetch(route).then(res => {
            res.json().then(data => {
                if(callback) callback(data);
            });
        });
    }

    getAllProducts(callback) {
        ProductsRoutes.fetchRoute(this.allProductsRoute, callback);
    }

    setSearchProducts(input, callback) {
        this.setSearchRoute = input;
        ProductsRoutes.fetchRoute(this.setSearchRoute, callback);
    }
    
    getAllCategories(callback) {
        ProductsRoutes.fetchRoute(this.allCategoriesRoute, callback);
    }

    setCategoryProducts(input, callback) {
        this.setCategoryRoute = input;
        ProductsRoutes.fetchRoute(this.setCategoryRoute, callback);
    }
}

const productsMethods = new ProductsRoutes();