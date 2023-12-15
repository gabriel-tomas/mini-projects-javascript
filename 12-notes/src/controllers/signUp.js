const SignUp = require("../models/signUp");

exports.homePage = (req, res, next) => {
    res.render("signUp");
}

exports.signUp = async (req, res, next) => {
    try {
        const signUp = new SignUp(req.body);
        await signUp.register();
        if(signUp.errors.length > 0) {
            req.flash("errors", signUp.errors);
            req.session.save(() => {
                res.redirect("/signup");
            });
            return;
        }
        req.flash("successes", "Conta criada com sucesso!");
        req.session.user = signUp.user;
        req.session.save(() => {
            res.redirect("/signup");
        });
    } catch(err) {
        console.log(err);
        res.render("404");
    }
}