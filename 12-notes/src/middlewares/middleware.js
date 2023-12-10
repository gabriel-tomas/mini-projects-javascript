exports.checkIfCan = (req, res, next) => {
    try {
        if(req.session.user) {
            res.locals.logged = true;
        } else {
            res.locals.logged = false;
        }
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

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === "EBADCSRFTOKEN") {
        return res.render("404");
    }
    next();
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}