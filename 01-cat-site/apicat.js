const sectionCatsImages = document.querySelector(".section-cat-images");
const BtnRandomizeCats = document.querySelector(".button-randomize");

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
    let paragraph = await CatFact();
    sectionCatsImages.innerHTML += `<div class="container-image-cat">
        <img src="${pic}" alt="Cat Image">
        <div class="catfactindividual">
            <p>${paragraph}</p>
        </div>
    </div>`
}


function AddContent() {
    for (let i = 0;i <= 5;i++) {
        SetImgAndP();
    }
}


AddContent();

BtnRandomizeCats.addEventListener("mousedown", AddContent);


