const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
    },
    product_uid: {
        type: String,
        required: true,
    },
    imageURL: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
})

module.exports = {
    model: mongoose.model("Product", productSchema, "products"),
    schema: productSchema
}