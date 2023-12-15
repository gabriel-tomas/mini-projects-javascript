exports.sessionCheck = (req, res, next) => {
    if(req.session.user) {
        req.flash("floatWarns", "Você já está logado")
        req.session.save(() => {
            return res.redirect("back");
        });
        return;
    }
    next();
}