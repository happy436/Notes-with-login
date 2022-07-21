const { Schema, model } = require("mongoose");

const schema = new Schema({
    name: String,
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }
});

module.exports = model("User", schema);
