(() => {
    const searchBtn = document.querySelector("header .search-btn");
    const searchBox = document.querySelector("header #search-box");
    const arrowRight = document.querySelector("header .right-arrow");
    
    searchBtn.addEventListener("click", () => {
        if(getComputedStyle(searchBox).visibility === "hidden") {
            searchBoxVisibility(true);
            changeOpacity(true, searchBox);
            changeOpacity(true, arrowRight);
            setTimeout(() => {changeOpacity(false, arrowRight)}, 150);
            searchBoxChangeWidth(true);
            arrowToRight();
        } else {
            searchBoxVisibility(false);
            changeOpacity(false, searchBox);
            changeOpacity(false, arrowRight);
            searchBoxChangeWidth(false);
            arrowToOriginal();
        }
    });

    function searchBoxChangeWidth(change) {
        change? searchBox.style.width = "70%" : searchBox.style.width = "0%";
    }

    function changeOpacity(opacity, el) {
        opacity? el.style.opacity = "1" : el.style.opacity = "0";
    }

    function searchBoxVisibility(visi) {
        visi? searchBox.style.visibility = "visible" : setTimeout(() => {searchBox.style.visibility = "hidden"}, 130);
    }

    function arrowToRight() {
        arrowRight.style.left = "130%";
    }

    function arrowToOriginal() {
        arrowRight.style.left = "0%";
    }
})();