const SingUp = require("../models/signUp");

exports.homePage = (req, res, next) => {
    res.render("signUp");
}

exports.singUpPost = (req, res, next) => {
    const {firstName, lastName, userName, password} = req.body;
    const newUser = new SingUp(firstName, lastName, userName, password);
    const validUser = newUser.valid();
    if(validUser) {
        newUser.create();
/*         req.session.user = userName;
        req.session.save(() => {
            console.log("sessão user salva");
        }) */
        console.log(`SignUp - Usuário ${userName} criado`);
        res.redirect("/login");
    } else {
        res.redirect("/signup");
    }
}