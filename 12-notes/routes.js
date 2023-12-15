const express = require("express");
const route = express.Router();
const homeController = require("./src/controllers/home");

const signUpController = require("./src/controllers/signUp");

const loginController = require("./src/controllers/login");

const logoutController = require("./src/controllers/logout");

const notesController = require("./src/controllers/notes");
const notesPrivate = require("./src/middlewares/notes");

const {sessionCheck} = require("./src/middlewares/login");

// Rota home
route.get("/", homeController.homePage);

// Rota sign up
route.get("/signup", sessionCheck, signUpController.homePage);
route.post("/signup", sessionCheck, signUpController.signUp);

// Rota login
route.get("/login", sessionCheck, loginController.homePage);
route.post("/login", sessionCheck, loginController.login);

// Rota logout
route.get("/logout", logoutController.logout);

// Notas do usuário (privado para pessoas logadas)
route.get("/notes", notesPrivate.checkLogin, notesController.homePage);
route.post("/notes", notesPrivate.checkLogin, notesController.notesPost);

module.exports = route;