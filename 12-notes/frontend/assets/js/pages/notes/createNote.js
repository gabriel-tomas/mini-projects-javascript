const btnCreateNote = document.querySelector(".create-note");

if(btnCreateNote) {
    btnCreateNote.addEventListener("click", () => {
        const form = document.querySelector(".form-create-note");
        form.style.display = "block";
    });
}