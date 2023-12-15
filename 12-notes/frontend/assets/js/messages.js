const btnFloatAlert = document.querySelector(".close-float-alert");

btnFloatAlert.addEventListener("click", (e) => {
    const el = e.target.parentElement.parentElement;
    el.remove();
});