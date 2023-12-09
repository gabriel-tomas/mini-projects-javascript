const Login = require("../models/login");

exports.homePage = (req, res, next) => {
    res.render("login");
}

exports.loginPost = (req, res, next) => {
    const {userName, password} = req.body;
    const conta = new Login(userName, password);
    const validarConta = conta.valid();
    if(validarConta) {
        conta.login()
            .then(user => {
                if(user) {
                    let {_id, firstName, lastName, userName, password} = user;
                    _id = _id.valueOf();
                    req.session.user = {id: _id, firstName: firstName, lastName: lastName, userName: userName};
                    res.redirect("/notes");
                } else {
                    res.redirect("/login");
                }
            })
            .catch((err) => {
                res.redirect("/login");
                console.log(err);
                return false;
            })
    } else {
        res.redirect("/login");
    }
}