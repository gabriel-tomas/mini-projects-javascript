const Login = require("../models/login");

exports.homePage = (req, res, next) => {
    res.render("login");
}

exports.login = async (req, res, next) => {
    try {
        const login = new Login(req.body);
        await login.login();
        if(login.errors.length > 0) {
            req.flash("errors", login.errors);
            req.session.save(() => {
                res.redirect("/login");
            });
            return;
        }
        req.flash("floatSuccesses", "Logado com sucesso!");
        req.session.user = login.user;
        req.session.save(() => {
            res.redirect("back");
        });
    } catch(err) {
        console.log(err);
        res.render("404");
    }
}