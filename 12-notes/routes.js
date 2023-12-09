const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/home");
const signUpController = require("./src/controllers/signUp");

const loginController = require("./src/controllers/login");

const notesController = require("./src/controllers/notes");
const notesPrivate = require("./src/middlewares/notesPrivate");

// Rota home
route.get("/", homeController.homePage);

// Rota sign up
route.get("/signup", signUpController.homePage);
route.post("/signup", signUpController.singUpPost);

// Rota login
route.get("/login", loginController.homePage);
route.post("/login", loginController.loginPost);

// Notas do usuário (privado para pessoas logadas)
route.get("/notes", notesPrivate.checkLogin, notesController.homePage);

module.exports = route;