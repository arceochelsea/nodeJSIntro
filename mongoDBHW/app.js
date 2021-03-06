require('dotenv').config()

//packages 
const express = require('express');
const mongoose = require('mongoose');

//main variable application
const app = express();

//router
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');
const UserModel = require('./models/User.js');

//CONSTANTS
const port = process.env.PORT || 3000;
const URI = process.env.MONGO;


app.use(express.json()); 
app.use(express.static('public'))

//USING A ROUTER
app.use('/', homeRouter);
app.use('/user', userRouter);

if (typeof URI === 'string') {
    const mongoOptions = { useNewUrIParser: true, useUnifiedTopology: true, useCreateIndex: true }; //standard, should be in all good mongo files
//CONNECTION TO DATABASE
mongoose.connect(URI, mongoOptions, (err) => { //will attempt to connect to database
    if (err) {
        console.error(`\nError Connecting to MongoDB: ${err.message || err}\n`) //saves the use of an if else statement if value is true use the first condition if not use the next 
        //err.message may not always be defined, IF UNDEFINED, err obj has more info 
    } else {
        console.log('Connected to DB');
    }
})
} else {
    console.error('Mongo URI missing or invalid, check node environment variables');
}


//START SERVER LISTENING
app.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
}) 
