const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/home");

const signUpController = require("./src/controllers/signUp");

const loginController = require("./src/controllers/login");

const logoutController = require("./src/controllers/logout");

const notesController = require("./src/controllers/notes");
const notesPrivate = require("./src/middlewares/notesPrivate");

const {checkIfCan} = require("./src/middlewares/middleware");

// Rota home
route.get("/", checkIfCan, homeController.homePage);

// Rota sign up
route.get("/signup", checkIfCan, signUpController.homePage);
route.post("/signup", checkIfCan, signUpController.singUpPost);

// Rota login
route.get("/login", checkIfCan, loginController.homePage);
route.post("/login", checkIfCan, loginController.loginPost);

// Rota logout
route.get("/logout", logoutController.logout);

// Notas do usuário (privado para pessoas logadas)
route.get("/notes", checkIfCan, notesPrivate.checkLogin, notesController.homePage);
route.post("/notes", checkIfCan, notesPrivate.checkLogin, notesController.notesPost);

module.exports = route;