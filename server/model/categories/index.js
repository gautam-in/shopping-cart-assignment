const mongoose = require("mongoose");
const Products = require("../products");

const Schema = mongoose.Schema;
const categorySchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category_uid: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    products: {
        type: [Products.schema],
    },
    order: {
        type: Number,
        required: true,
    },
    enabled: {
        type: Boolean,
        required: true,
    }
})

module.exports = {
    model: mongoose.model("Category", categorySchema, "categories"),
    schema: categorySchema
}