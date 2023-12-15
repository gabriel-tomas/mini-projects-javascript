const mongoose = require("mongoose");
const schema = require("./schemas/userSchema");
const bcrypt = require("bcryptjs");

const modelUser = mongoose.model("users", schema);

class SignUp {
    constructor (body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async register() {
        this.cleanUp();
        this.valid();
        await this.checkExist();
        if(this.errors.length > 0) return;

        const salt = bcrypt.genSaltSync();
        this.body.password = bcrypt.hashSync(this.body.password, salt);

        this.user = await modelUser.create(this.body);
    }

    valid() {
        if(this.body.firstName.length < 2) this.errors.push("Primeiro nome inválido");
        if(this.body.lastName.length < 2) this.errors.push("Sobrenome inválido");
        if(this.body.userName.length < 5) this.errors.push("Nome de usuário tem que conter ao minímo 5 caracteres");
        if(this.body.password.length < 8) this.errors.push("Sua senha tem que conter ao menos 8 caracteres");
    }

    async checkExist() {
        this.user = await modelUser.findOne({userName: this.body.userName});
        console.log(this.user);
        if(this.user) this.errors.push("Usuário já existe, faça o login!");
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

module.exports = SignUp;