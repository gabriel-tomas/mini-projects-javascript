const sectionCatsImages = document.querySelector(".section-cat-images");
const BtnRandomizeCats = document.querySelector(".button-randomize");
let itemsAdded = [];

async function CatPicture() {
    const urlCat = await fetch("https://api.thecatapi.com/v1/images/search");
    const jsonData = await urlCat.json();
    return jsonData[0]["url"];
}

async function CatDailyFact() {
    const urlDaily = await fetch("https://cat-fact.herokuapp.com/facts");
    const jsonData = await urlDaily.json();
    return jsonData[0]["text"];
}

async function CatFact() {
    const urlFact = await fetch("https://meowfacts.herokuapp.com");
    const jsonData = await urlFact.json();
    return jsonData["data"][0];
}


async function SetImgAndP(){
    let pic = await CatPicture();
    let pictureFunc = String(pic);
    let paragraph = await CatFact();
    let randomPrice = Math.round(Math.random() * (7 - 1) + 1);
    
    sectionCatsImages.innerHTML += `<div class="container-cat-pet">
        <div class="container-cat-image">
            <img src="${pic}" alt="Cat Image">
        </div>
        <div class="catfactindividual">
            <p>${paragraph}</p>
        </div>
        <div class="add-cat-buy">
            <button class="buy-button">Buy</button>
            <button class="add-to-cart-button" onmousedown="addToCart('${pictureFunc}', ${randomPrice})">Add to Cart</button>
        </div>
    </div>`;
}

function ReAddContent() {
    itemsAdded = [];
    for (let i = 0;i <= 5;i++) {
        sectionCatsImages.innerHTML = ``;
    }
    for (let i = 0;i <= 5;i++) {
        SetImgAndP();
    }
}


BtnRandomizeCats.addEventListener("mousedown", ReAddContent);

ReAddContent(); 