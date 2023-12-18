const mongoose = require("mongoose");

const modelUser = mongoose.models.users;

class Notes {
    constructor(userId, body = null) {
        this.body = body;
        this.userId = userId;
        this.notes = [];
        this.errors = [];
    }

    async getNotes() {
        const allUser = await modelUser.findById({_id: this.userId});
        if(allUser.notes) {
            this.notes = allUser.notes;
        }
    }

    async createNote() {
        this.cleanUp();
        this.valid();
        if(this.errors.length > 0) return;

        await this.getNotes();

        const allUser = await modelUser.findByIdAndUpdate({_id: this.userId}, {notes: [this.body, ...this.notes]}, {new: true});
        this.notes = allUser.notes;
    }

    async getNote(id) {
        await this.getNotes();
        let noteRequest;
        this.notes.forEach(note => {
            if(note.id.valueOf() === id) {
                noteRequest = note;
            }
        });
        return noteRequest;
    }

    async save(id, content) {
        const noteToSave = await this.getNote(id);
        if(!noteToSave) return null;
        noteToSave.noteContent = content;
        
        await this.getNotes();

        let noteId;
        this.notes.forEach((value, id) => {
            if(value.id.valueOf() === noteToSave.id.valueOf()) {
                noteId = id
            }
        });
        this.notes[noteId] = noteToSave;
        await modelUser.findByIdAndUpdate({_id: this.userId}, {notes: this.notes});
    }

    async delete(id) {
        const noteToSave = await this.getNote(id);
        if(!noteToSave) return null;
        
        await this.getNotes();

        let noteId;
        this.notes.forEach((value, id) => {
            if(value.id.valueOf() === noteToSave.id.valueOf()) {
                noteId = id
            }
        });
        delete this.notes[noteId];
        this.notes = removeEmptyItems(this.notes);
        await modelUser.findByIdAndUpdate({_id: this.userId}, {notes: this.notes});

        function removeEmptyItems(obj) {
            return obj.filter(value => value);
        }
        return true;
    }
    
    valid() {
        if(this.body.noteName === "") this.errors.push('Campo "Nome da nota" não pode estar vazio');
    }

    cleanUp() {
        if(!this.body) return;

        for(const key in this.body) {
            if(typeof this.body[key] !== "string") {
                this.body[key] = "";
            }
        }

        this.body = {
            id: new mongoose.Types.ObjectId(),
            noteName: this.body.noteName,
            noteDesc: this.body.noteDesc,
            noteContent: null
        };
    }
}

module.exports = Notes;