function mainScope() {
    const buttonSave = document.querySelector(".save-button");
    const textInput = document.querySelector(".input-text-note");

    buttonSave.addEventListener("click", () => {
        saveText(textInput.value);
    })

    function saveText(text) {
        const jsonText = JSON.stringify(text);
        localStorage.setItem("nota", jsonText);
    }

    function addTextSaved() {
        const paragraphs = getText().split("\n");
        for(let p of paragraphs) {
            textInput.innerHTML += p + "\n";
        }
    }

    function getText() {
        const text = localStorage.getItem("nota");
        return JSON.parse(text);
    }

    addTextSaved();
}

mainScope();
