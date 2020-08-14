const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({//everytime youre working w/ class and youre making a new instance you have to write new
    username: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 33, 
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },
    email: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 200,
        unique: true,
    },
    emailValidated: {
        type: Boolean,
        default: false 
    }
}); // with this schema we can now export this info into a model

const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel; //we can interface with our database in any other program 