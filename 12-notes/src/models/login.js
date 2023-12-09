const mongoose = require("mongoose");
const schema = require("./schemas/userSchema");

let model;
try {
    model = mongoose.model("users", schema);
} catch (e) {
    model = mongoose.models.users;
}

class Login {
    constructor (userName, password) {
        this.userName = userName;
        this.password = password;
    }

    valid() {
        if(typeof this.userName !== "string" || this.userName.length < 5) return false;
        if(typeof this.password !== "string" || this.password.length < 8) return false;
        return true;
    }

    login() {
        return model.findOne({userName: this.userName, password: this.password});
    }
}

module.exports = Login;