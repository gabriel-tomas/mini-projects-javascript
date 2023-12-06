import productsMethods from '../productApi';
import ProductCard from '../productCard';

(() => {
    const searchItem = new URLSearchParams(window.location.search).get("q");

    
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