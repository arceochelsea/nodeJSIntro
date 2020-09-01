require('dotenv').config();

//packages 
const express = require('express');
const mongoose = require('mongoose');
const e = require('express');

//env files
let port = process.env.PORT;
let URIMongo = process.env.URIMongo;

//set up for app.js and express packages setup
const app = express();
app.use(express.static('public'));
app.use(express.json());

//mongoose validation
console.log(port);
console.log(typeof(URIMongo));

if (typeof(URIMongo) === 'string') {
    mongoose.connect(URIMongo, {useNewUrlParser: true, useFindAndModify: true}, (error) => {
        if (error) {
            console.error(error.message || error)
        } else {
            console.log('Successful connection to MongoDB!')
        }
    })
} else {
    console.log('Invalid connection to Database, URIMongo is not a string!');
}

//routes
const homeRouter = require('./routes/homeRouter');

//using routers
app.use('/', homeRouter);

app.listen(port, function(){
    console.log(`We are now listening to port: ${port}`);
})

