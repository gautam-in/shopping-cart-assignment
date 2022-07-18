const mongoose = require('mongoose');

const BannerSchema = new mongoose.Schema({
    bannerImageUrl: {
        type: String,
    },
    bannerImageAlt: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default:true
    },
    order:{
        type:Number
    }

});
// Encrypt password using bcrypt

module.exports = mongoose.model('Banner', BannerSchema);

