const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    key: {
        type: String,
    },
    description: {
        type: String
    },
    enabled:{
        type:Boolean,
        default:true
    },
    order:{
        type:Number
    },
    imageUrl:{
        type: String
    }

});
// Encrypt password using bcrypt

module.exports = mongoose.model('Category', CategorySchema);

