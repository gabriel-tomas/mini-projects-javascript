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
route.get("/", homeController.index);

// Rota sign up
route.get("/signup", sessionCheck, signUpController.index);
route.post("/signup", sessionCheck, signUpController.signUp);

// Rota login
route.get("/login", sessionCheck, loginController.index);
route.post("/login", sessionCheck, loginController.login);

// Rota logout
route.get("/logout", logoutController.logout);

// Notas do usuário (privado para pessoas logadas)
route.get("/notes", notesPrivate.checkLogin, notesController.index);
route.post("/notes/create", notesPrivate.checkLogin, notesController.create);
route.get("/notes/edit/:id", notesPrivate.checkLogin, notesController.editIndex);
route.post("/notes/save/:id", notesPrivate.checkLogin, notesController.save);
route.get("/notes/delete/:id", notesPrivate.checkLogin, notesController.delete);


module.exports = route;