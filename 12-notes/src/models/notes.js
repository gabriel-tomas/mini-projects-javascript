const mongoose = require("mongoose");

const model = mongoose.models.users;

class Notes {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }

    getNotes() {
        return model.findOne({userName: this.userName, password: this.password}).then(user => user.notes);
    }
    
    async updateNotes(notes) {
        await model.findOneAndUpdate({userName: this.userName, password: this.password}, {notes: notes});
    }
}

module.exports = Notes;