const {Signup, signupModel} = require("../models/signupModel");

exports.paginaInicial = (req, res, next) => {
    res.render("signup");
}

exports.postSign = (req, res, next) => {
    const {name, user, password} = req.body;
    const newUser = new Signup(name, user, password);
    signupModel.findOne({name: name, user: user})
        .then(data => {
            if(data) {
                console.log("Usuário encontrado", data.name, "faça o login...");
                res.redirect("/contact");
            } else {
                const createUser = newUser.valid();
                console.log("Usuário não existe, criando..");
                console.log("Usuário criado?", createUser);
                if(createUser) {
                    console.log("usuário criado com sucesso");
                    req.session.user = {userName: user, logado: true};
                    res.redirect("/contact");
                } 
            }
        })
        .catch((err) => {
            console.log("erro ao procurar usuário");
        }) 
}