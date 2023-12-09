const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const contatoController = require("./src/controllers/contatoController");
const signupController = require("./src/controllers/signupController");

// Rota da home
route.get("/", homeController.paginaInicial);
route.post("/", homeController.paginaInicialPost);

// Rota signup
route.get("/signup", signupController.paginaInicial);
route.post("/signup", signupController.postSign);

// Rota de contato
route.get("/contato", contatoController.oiContato);
route.post("/contato", contatoController.contatoPost);

module.exports = route;