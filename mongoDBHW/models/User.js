const mongoose = require('mongoose'); //first we must require the package into file

//next we must create schema 

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 30,
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
        maxlength: 100,
        unique: true,
    },
    emailValidated: {
        type: Boolean,
        default: false
    }
}); 

const UserModel = mongoose.model('user', UserSchema); // we are taking the UserSchema and compile it into a model which returns a bunch of methods. So it will take all the information from the schema and new info from the methods we will give it like user.find() etc.

//
// UserModel.find({/* whatever we're trying to find*/}, function(error, users){
//     if(error){
//         console.error(error);
//     } else {
//         console.log(users);
//     }
// }


module.exports = UserModel; 

