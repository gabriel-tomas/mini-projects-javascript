const mongoose = require("mongoose");
const schema = require("./schemas/userSchema");

const model = mongoose.model("users", schema);

class SignUp {
    constructor (firstName, lastName, userName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.notes = null;
    }

    valid() {
        if(typeof this.firstName !== "string" || this.firstName.length < 2) return false;
        if(typeof this.lastName !== "string" || this.lastName.length < 2) return false;
        if(typeof this.userName !== "string" || this.userName.length < 5) return false;
        if(typeof this.password !== "string" || this.password.length < 8) return false;
        return true;
    }

    checkExist() {
        return model.findOne({userName: this.userName, password: this.password});
    }

    create() {
        model.create(this);
    }
}

module.exports = SignUp;