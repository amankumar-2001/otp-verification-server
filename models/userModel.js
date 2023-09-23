const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    phone: {
        type: String,
        require: true
    },
    otp: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
});

const userModel = new mongoose.model('users', userSchema)

module.exports = userModel;