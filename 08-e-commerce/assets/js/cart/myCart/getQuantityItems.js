export default function getQuantityItems(arrayIds) {
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


