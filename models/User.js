const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required : [true, "Please add a first name"]
    },
    last_name: {
        type: String,
        required : [true, "Please add a last name"]
    },
   email: {
        type: String,
        required : [true, "Please add an email"],
        unique: true
    },
    password: {
        type: String,
        required : [true, "Please add a password"],
        minlength : 6,
        select: false
    },
    created_at:{
        type:Date,
        default:Date.now
    }
});
// Encrypt password using bcrypt
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
    console.log("thuis passord--->", this.password);
    return await bcrypt.compare(enteredPassword, this.password);
};
module.exports = mongoose.model('User', UserSchema);

