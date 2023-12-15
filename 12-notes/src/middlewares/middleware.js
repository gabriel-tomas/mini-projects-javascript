exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash("errors");
    res.locals.successes = req.flash("successes");
    res.locals.user = req.session.user;
    res.locals.floatWarns = req.flash("floatWarns");
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