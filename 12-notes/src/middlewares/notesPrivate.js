exports.checkLogin = (req, res, next) => {
    if(req.session.user) {
        console.log("Você é um usuário permitido");
        next();
    } else {
        console.log("Você não é permitido aqui, se cadastre ou logue");
        res.redirect("/signup");
    }
}