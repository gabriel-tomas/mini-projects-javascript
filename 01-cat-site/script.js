const mainCursor = document.querySelector("#main-cursor");
const secondCursor = document.querySelector("#second-cursor");
const allButtons = document.querySelector("button");

function MoveCursor(event, cursor) {
    let posY = event.clientY;
    let posX = event.clientX;
    cursor.style.top = `${posY}px`;
    cursor.style.left = `${posX}px`;
}

function DecreaseCursorSize(cursor) {
    cursor.style.width = "50px";
    cursor.style.height = "50px";
    cursor.style.transition = "background-color .2s, width .2s, height .2s";
}

function IncreaseCursorSize(cursor) {
    cursor.style.width = "70px";
    cursor.style.height = "70px";
}

window.addEventListener("mousemove", function(event){
    MoveCursor(event, mainCursor);
});

window.addEventListener("mousemove", function(event){
    MoveCursor(event, secondCursor);
});

allButtons.addEventListener("mouseenter", function() {
    DecreaseCursorSize(mainCursor);
})

allButtons.addEventListener("mouseleave", function() {
    IncreaseCursorSize(mainCursor);
})

