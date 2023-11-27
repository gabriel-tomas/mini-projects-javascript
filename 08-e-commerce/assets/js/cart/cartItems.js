(() => {
    const IdsAndQuantitys = getQuantityItems(getProductsId());
    requestItems(IdsAndQuantitys);

    function requestItems(idsQuantitys) {
        for(let [id, quantity] of Object.entries(idsQuantitys)) {
            productsMethods.getSingleProduct(id, res => {
                if(quantity > 1) {
                    const product = new CartProductCard(res);
                    product.quantity = quantity;
                    product.create();
                } else {
                    new CartProductCard(res).create();
                }
            });
        }
    }

    function getQuantityItems(arrayIds) {
        function createObjQuantityId() {
            let obj = {};
            arrayIds.forEach(value0 => {
                const count = checkRepeatedProducts(value0);
                arrayIds.forEach(value1 => {
                    delete arrayIds[arrayIds.indexOf(value0)];
                });
                obj[value0] = count;
            })
            return obj;
        }

        function checkRepeatedProducts(productId) {
            const ids = [...arrayIds];
            let productCount = 0;   
            ids.forEach((value) => {
                if(value === productId) {
                    productCount++;
                }
            })
            return productCount;
        }
        
        return createObjQuantityId();
    }

    
    function getProductsId() {
        let itemsAdded = localStorageGet("cart-items").split(",");
        let array = [];
        itemsAdded = itemsAdded.map(value => {
            array.push(value.trim());
        });
        return array;
    }
})();