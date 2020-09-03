const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 50,
        unique: true,
    },
    id: {
        type: Number,
        required: true,
        minlength: 6,
        maxlength: 6,
        unique: true,
    },
    favMovie: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
        unique: false
    }
});

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;