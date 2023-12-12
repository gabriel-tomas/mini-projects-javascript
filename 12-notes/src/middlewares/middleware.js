exports.checkIfCan = (req, res, next) => {
    try {
        if(req.session.user && req.path !== "/notes") {
            console.log("indo para notes");
            return res.redirect("/notes");
        }
    } catch(err) {
        console.log(err);
        return res.redirect("/");
    }
    next();
}

exports.loggedTemplate = (req, res, next) => {
    if(req.session.user) {
        res.locals.logged = true;
    } else {
        res.locals.logged = false;
    }
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render("404");
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}