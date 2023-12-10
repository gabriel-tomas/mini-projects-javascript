exports.logout = (req, res) => {
    req.session.user = null;
    res.redirect("/");
}