const Notes = require("../models/notes");

exports.index = async (req, res) => {
    const userId = req.session.user._id;
    const note = new Notes(userId);
    await note.getNotes();
    res.render("notes", {notes: note.notes});
}


exports.create = async (req, res) => {
    const userId = req.session.user._id;
    const note = new Notes(userId, req.body);
    await note.createNote();
    if(note.errors.length > 0) {
        req.flash("floatWarns", note.errors);
        req.session.save(() => {
            res.redirect("/notes");
        });
        return;
    }
    req.flash("floatSuccesses", "Nota criada com sucesso");
    req.session.save(() => {
        res.redirect("/notes");
    });
}

exports.editIndex = async (req, res) => {
    const noteId = req.params.id;
    const userId = req.session.user._id;
    const note = new Notes(userId);
    const noteRequest = await note.getNote(noteId);
    if(!noteRequest) {
        res.render("404");
        return;
    }
    res.render("note-edit", {note: noteRequest});
}

exports.save = async (req, res) => {
    const noteId = req.params.id;
    const userId = req.session.user._id;
    const content = req.body.noteContent;
    const note = new Notes(userId);
    await note.save(noteId, content);
    req.session.save(() => {
        res.redirect(`/notes/edit/${noteId}`);
    });
}

exports.delete = async (req, res) => {
    const noteId = req.params.id;
    const userId = req.session.user._id;
    const note = new Notes(userId);
    const noteDelete = await note.delete(noteId);
    if(!noteDelete) {
        res.render("404");
        return;
    }
    req.session.save(() => {
        res.redirect(`/notes`);
    });
}