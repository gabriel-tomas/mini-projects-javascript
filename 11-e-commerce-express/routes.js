const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/homeController");
const cartController = require("./src/controllers/cartController");
const productsSearch = require("./src/controllers/productsSearch");

function startMiddleware(req, res, next) {
    console.log("Passei no seu Middleware");
    next();
}

// Rota home
route.get("/", startMiddleware, homeController.paginaInicial);

// Rota cart
route.get("/cart", cartController.paginaInicial);

// Rota pesquisa
route.get("/products-search/:idProduct?", productsSearch.paginaInicial);


module.exports = route;