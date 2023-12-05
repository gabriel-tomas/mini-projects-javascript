(() => {
    const searchInput = document.querySelector("#search-box");

    searchInput.addEventListener("keypress", e => {
        if(e.key === "Enter" && searchInput.value !== "") {
            window.location.href = `/products-search.html?search=${searchInput.value.toLowerCase()}`;
        }
    })
})();