exports.paginaInicial = (req, res) => {
    res.render(`index`, {
        titulo: `Bem vindo as suas notas`,
        subtitle: "Aqui é a página home",
    });
};

exports.paginaInicialPost = (req, res) => {
    res.send(req.body);
};