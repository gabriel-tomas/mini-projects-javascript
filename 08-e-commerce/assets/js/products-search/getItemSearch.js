(() => {
    const searchItem = new URLSearchParams(window.location.search).get("search");
    
    productsMethods.setSearchProducts(searchItem, res => {
        res.products.forEach(product => {
            addToPage(new ProductCard(product).create());
        });
    })

    function addToPage(item) {
        const searchItemsContainer = document.querySelector(".search-items");

        searchItemsContainer.appendChild(item);
    }
})();