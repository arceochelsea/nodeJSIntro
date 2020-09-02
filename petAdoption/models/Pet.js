const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    kindOfPet: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30, 
    },
    breed: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
    },
    age: {
        type: String,
        required: true
    },
    size: {
        
    }
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
    }
}); // with this schema we can now export this info into a model

const PetModel = mongoose.model('pet', PetSchema);

module.exports = PetModel; //we can interface with our database in any other program 