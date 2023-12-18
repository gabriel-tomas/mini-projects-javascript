exports.index = (req, res) => {
    res.render("index", {
        welcomeWords: ["ideias", "pensamentos", "projetos", "compromissos", "senhas", "contas", "datas", "horários", "observações", "comentários", "mensagens", "emails", "endereços", "listas", "dicas", "preços", "produtos"]
    });
}