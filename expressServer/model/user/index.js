const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const addressSchema = new Schema ({
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    streetAddress: {
       type: String,
       required: true
    }
})
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: addressSchema,
        required: true
    },
    cart: {
        type: [String],
        required: true
    },

    email: {
        type: String,
        required: true
    }
})

module.exports = {
    model: mongoose.model("User", userSchema, "users"),
    schema: userSchema
}