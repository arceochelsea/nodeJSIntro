//packages 
const express = require('express');
const mongoose = require('mongoose');

//main variable application
const app = express();

//router
const homeRouter = require('./routes/homeRouter');

//CONSTANTS
const port = process.env.PORT || 3000;
const URI = process.env.MONGO;


app.use(express.json()); //parse the body from a json format to a js object that is workable in js
app.use(express.static('public'))

//USING A ROUTER
app.use('/', homeRouter);

//CONNECTIN TO DATABASE
    // mongoose.connect(URI, mongoOptions, (err) => { //will attempt to connect to database
    //     if (err) {
    //         console.error(`\nError Connecting to MongoDB: ${err.message || err}\n`) //saves the use of an if else statement
    //     } else {
    //         console.log('Connected to DB')
    //     }
    // })

//START SERVER LISTENING
app.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
}) 
