const Notes = require("../models/notes");

exports.homePage = (req, res, next) => {
    const {userName, password} = req.session.user;
    const notes = new Notes(userName, password);
    notes.getNotes()
        .then(notes => {
            res.render("notes", {
                notes: notes
            });
        })
}

exports.notesPost = (req, res, next) => {
    const {newNotes} = req.body;
    const {userName, password} = req.session.user;
    const notes = new Notes(userName, password);
    notes.updateNotes(newNotes);
}
