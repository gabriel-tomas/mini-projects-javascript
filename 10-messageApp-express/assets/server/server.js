const express = require("express");
const fs = require("fs").promises;
const pathJson = require("path").resolve(__dirname, "json", "text.json");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    readFile()
        .then(content => res.send(content))
    return;
})

app.post("/", (req, res) => {
    writeJson(req.body);
    return;
})

function writeJson(data) {
    readFile()
        .then(array => JSON.parse(array))
        .then(array => {
            array[0] = data;
            array = JSON.stringify(array, undefined, 2);
            fs.writeFile(pathJson, array, {
                flag: "w"
            })
        })
}

function readFile() {
    return fs.readFile(pathJson, "utf8");
}

app.listen(3000);
