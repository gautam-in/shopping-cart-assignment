const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product'
            },
            quantity:{
                type:Number,
                default: 1
            }
        }


    ],
    totalAmount :{
        type:Number,
        default:0
    }


});
// Encrypt password using bcrypt

module.exports = mongoose.model('Cart', CartSchema);

