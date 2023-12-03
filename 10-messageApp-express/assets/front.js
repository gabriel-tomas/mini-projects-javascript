/* ;

fetch("http://localhost:3000/", {
    mode: "cors",
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({messager2: "claro"})
});

 */

setInterval(() => {fetch("http://localhost:3000/", {mode: "cors"})
.then(res => res.json())
.then(json => {
    if(document.querySelector(".messages").innerHTML.replace("<br>", "").trim() === json[0].messager) {
        return;
    };
    document.querySelector(".messages").innerHTML += `${json[0].messager}<br>`;
    console.log(json);
})}, 500);

document.querySelector(".input-text").addEventListener("keypress", e => {
    if(e.key === "Enter") {
        const inputText = e.target.value;
        fetch("http://localhost:3000/", {
            mode: "cors",
            method: "POST",
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({messager: inputText})
        })
    }
})