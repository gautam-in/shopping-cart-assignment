const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    cart: {
        type: [String],
        required: true
    }
})

module.exports = {
    model: mongoose.model("User", userSchema, "users"),
    schema: userSchema
}