require('dotenv').config();

//packages
const express = require('express');
const mongoose = require('mongoose');

//env var
let port = process.env.PORT;
let URIMongo = process.env.URIMONGO;

//set up for app.js + express packages setup
const app = express();
app.use(express.static('public')); //serves html pages
app.use(express.json()); //serves as the body parser

//mongoose validation
console.log(port);
console.log(typeof(URIMongo))

if (typeof(URIMongo) === 'string') {
    mongoose.connect(URIMongo, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
        if (error) { //if error is found
            console.error(error.message || error)//error is an obj, most err objs have message property
            //assume an obj with info about the error that is being passed in
        } else {
            console.log('Successful connection to MongoDB!');
        }
    })
} else {
    console.log('Invalid connection to Database, URIMongo is not a string');
}

//routes
const homeRouter = require('./routes/homeRouter');
//const userRouter = require('./routes/userRouter');

//using routers
app.use('/', homeRouter); //homeRouter is not NOT A PATH, you are requiring a file with an HTTP req 
//app.use('/profile', userRouter);

app.listen(port, function(){
    console.log(`We are now listening to port: ${port}.`)
}); 