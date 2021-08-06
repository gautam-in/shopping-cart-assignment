const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ordersSchema = new Schema({
    user_id: {
        type: mongoose.types.ObjectId,
        required: true,
    },
    items: {
        type: [String],
        required: true
    }
})

module.exports = {
    model: mongoose.model("Orders", ordersSchema, "orders"),
    schema: ordersSchema
}