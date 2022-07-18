const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    imageURL: {
        type: String,
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    stock: {
        type: Number
    },
    enabled:{
        type:Boolean,
        default:true
    },
    order:{
        type:Number
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }

});
// Encrypt password using bcrypt

module.exports = mongoose.model('Product', ProductSchema);

