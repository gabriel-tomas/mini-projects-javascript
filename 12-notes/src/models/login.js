const mongoose = require("mongoose");
const schema = require("./schemas/userSchema");
const bcrypt = require("bcryptjs");

let modelUser;
try {
    modelUser = mongoose.model("users", schema);
} catch (e) {
    modelUser = mongoose.models.users;
}

class Login {
    constructor (body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login() {
        this.cleanUp();
        this.valid();
        if(this.errors.length > 0) return;

        this.user = await modelUser.findOne({userName: this.body.userName});

        if(!this.user) {
            return this.errors.push("Usuário ou senha inválido ou incorreto");
        }

        if(!bcrypt.compareSync(this.body.password, this.user.password)) {
            this.errors.push("A senha está incorreta");
            this.user = null;
        }
    }

    valid() {
        if(this.body.userName === "") this.errors.push('Campo "Nome de usuário" não pode estar vazio');
        if(this.body.password === "") this.errors.push('Campo "Senha" não pode estar vazio');

        if(this.body.password !== "" && this.body.password.length < 8 || this.body.userName !== "" && this.body.userName.length < 5) this.errors.push("Usuário ou senha inválido ou incorreto");
    }

    cleanUp() {
        for(const key in this.body) {
            if(typeof this.body[key] !== "string") {
                this.body[key] = "";
            }
        }

        this.body = {
            firstName: this.body.firstName,
            lastName: this.body.lastName,
            userName: this.body.userName,
            password: this.body.password
        };
    }
}

module.exports = Login;