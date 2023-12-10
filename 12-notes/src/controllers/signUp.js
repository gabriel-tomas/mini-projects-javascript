const SingUp = require("../models/signUp");

exports.homePage = (req, res, next) => {
    res.locals.exist = null;
    res.render("signUp");
}

exports.singUpPost = (req, res, next) => {
    const {firstName, lastName, userName, password} = req.body;
    const newUser = new SingUp(firstName, lastName, userName, password);
    const validUser = newUser.valid();
    const checkExist = newUser.checkExist();
    if(validUser) {
        checkExist.then(r => {
            if(r) {
                req.flash("existUser", "Esta conta já existe, faça o login");
                res.locals.exist = req.flash("existUser");
                res.render("signUp");
                return;
            } else {
                newUser.create();
                console.log(`SignUp - Usuário ${userName} criado`);
                res.redirect("/login");
                return;
            }
        })
    } else {
        res.redirect("/signup");
    }
}