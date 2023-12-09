const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema({
    name: {type: String, require: true},
    user: {type: String, require: true},
    password: {type: String, require: true}
});

const signupModel = mongoose.model('accounts', signupSchema);

class Signup {
    constructor (name, user, password) {
        this.name = name;
        this.user = user;
        this.password = password
    }

    valid() {
        if(typeof this.name !== "string" || this.name.length < 5) {
            return false;
        }
        if(typeof this.user !== "string" || this.user.length < 5) {
            return false;
        }
        if(typeof this.password !== "string" || this.password.length < 8) {
            return false;
        }
        console.log("Todas os valores {name, user e password} passaram");
        signupModel.create(this);
        return true;
    }
}

module.exports.Signup = Signup;
module.exports.signupModel = signupModel;