const express = require("express");
const path = require("path");
const fs = require("fs").promises;

const app = express();
const jsonPath = path.resolve(__dirname, "json-data", "users.json");

function writeDataJson() {
    fetch('https://fakestoreapi.com/users')
        .then(content => content.json())
        .then(json => {
            let finalData = [];
            json.forEach(value => {
                const dataUser = {
                    username: value.username,
                    password: value.password
                }
                finalData.push(dataUser);
            })

            const jsonDataUser = JSON.stringify(finalData, undefined, 2);
    
            fs.writeFile(jsonPath, jsonDataUser, {
                flag: "a",
            });
        })
}

function getJsonData() {
    return fs.readFile(jsonPath, "utf8");
}

function serverExpress() {
    const app = express();

    app.get("/", (req, res) => {
        getJsonData().then(content => res.send(content));
    })

    app.listen(3000);
}

serverExpress();