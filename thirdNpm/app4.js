require('dotenv').config()

//PACKAGES
const express = require('express');
const mongoose = require('mongoose');

//MIDDLES
const firstMid = require('./middleware/firstMiddleware');

//ROUTERS
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userRouter');

//CONSTANTS
const port = process.env.PORT || 3000;
const URI = process.env.MONGO;

//MAIN APP VAR
const app = express();

//MIDDLEWARES/ROUTERS IN USE

app.use(express.json()); //parse the body from a json format to a js object that is workable in js

//MIDDLEWARE THAT ALL ROUTES USE (regardless of request-path or HTTP method) '/' 
app.use(firstMid);
app.use(express.static('public'))

//USING A ROUTER
app.use('/', homeRouter); //route branches cause they branch off the main one
app.use('/user', userRouter);

if (typeof URI === 'string') {

    const mongoOptions = { useNewUrIParser: true, useUnifiedTopology: true };

//CONNECTION TO DATABASE
mongoose.connect(URI, mongoOptions, (err) => { //will attempt to connect to database
    if (err) {
        console.error(`\nError Connecting to MongoDB: ${err.message || err}\n`) //saves the use of an if else statement
    } else {
        console.log('Connected to DB')
    }
}

} else {

    console.error('Mongo URI missing or invalid, check node environment variables');

}




//START SERVER LISTENING
app.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
}) 

