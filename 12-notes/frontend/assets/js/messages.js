const btnFloatAlert = document.querySelector(".close-float-alert");

if(btnFloatAlert) {
    btnFloatAlert.addEventListener("click", (e) => {
        const el = e.target.parentElement.parentElement;
        el.remove();
    });
}
