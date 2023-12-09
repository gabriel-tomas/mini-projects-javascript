exports.middlewareGlobal = (req, res, next) => {
    try {
        console.log(req.session.user.logado);
        if(req.session.user.logado && req.path !== "/") {
            res.redirect("/");
        }
    } catch(err) {
        if(req.path !== "/signup") {
            res.redirect("/signup");
        }
    }
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === "EBADCSRFTOKEN") {
        return res.render("404");
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}