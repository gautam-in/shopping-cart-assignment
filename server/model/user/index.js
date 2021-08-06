const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const addressSchema = new Schema({
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
});
const cartItemSchema = new Schema({
    product_uid: {
        type: [String],
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

const cartSchema = new Schema({
    items: [cartItemSchema],
    value: {
        type: Number,
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
        // address: {
        //     type: addressSchema,
        //     required: true
        // },
        cart: {
            value: Number,
            items: [{
                product_uid: String,
                quantity: Number,
                price: Number
            }]
        },

        email: {
            type: String,
            required: true
        },

    },
    {
        timestamps: true
    })

module.exports = {
    model: mongoose.model("User", userSchema, "users"),
    schema: userSchema
}