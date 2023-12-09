exports.checkIfCan = (req, res, next) => {
    try {
        if(req.session.user && req.path !== "/notes") {
            console.log("indo para notes");
            res.redirect("/notes");
        }
    } catch(err) {
        console.log("Error...");
        next();
    }
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