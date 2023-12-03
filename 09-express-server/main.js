function getLocalDataSever() {
    return fetch("http://localhost:3000");
}

getLocalDataSever()
    .then(res => res.json())
    .then(json => console.log(json));