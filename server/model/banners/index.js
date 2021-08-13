const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bannerSchema = new Schema ({
    bannerImageUrl: {
        type: String,
        required: true,
    },
    bannerImageAlt: {
        type: String,
        required: true,
    },
    banner_uid: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
})

module.exports = {
    model: mongoose.model("Banner", bannerSchema, "banners"),
    schema: bannerSchema
}