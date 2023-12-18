const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    userName: {type: String, required: true},
    password: {type: String, required: true},
    notes: {type: Object, required: false}
})

module.exports = schema;