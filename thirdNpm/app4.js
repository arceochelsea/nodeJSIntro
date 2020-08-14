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

// var Post = require('./models/post')
// app.post('/api/posts', function (req, res, next) {
//   var post = new Post({
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email
//   })
//   post.save(function (err, post) {
//     if (err) { return next(err) }
//     res.json(201, post)
//   })
// })

//START SERVER LISTENING
app.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
}) 

