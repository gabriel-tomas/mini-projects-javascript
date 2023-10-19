function mainScope() {
    const cartButton = document.querySelector(".cart-button");
    const cartList = document.querySelector(".items-cats-added");
    let changeOnOff = false;
    

    cartButton.addEventListener("mousedown", function() {
        if (!changeOnOff) {
            changeOnOff = true;
            cartList.style.display = "block";
            //console.log(changeOnOff);
        }
        else {
            changeOnOff = false;
            cartList.style.display = "none";
            //console.log(changeOnOff);
        }
    });
}

mainScope();