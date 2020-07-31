//PACKAGES
const express = require('express');
const mongoose = require('mongoose');

//MIDDLES
const firstMid = require('./middleware/firstMiddleware');

//ROUTERS
const homeRouter = require('./routes/homeRouter');
const userRouter = require('./routes/userrouter');

//CONSTANTS
const port = 3000;

//MAIN APP VAR
const app = express();

//MIDDLEWARES/ROUTERS IN USE

app.use(express.json()); //parse the body from a json format to a js object that is workable in js

//MIDDLEWARE THAT ALL ROUTES USE (regardless of request-path or HTTP method) '/' 
app.use(firstMid);

//USING A ROUTER
app.use('/', homeRouter); //route branches cause they branch off the main one
app.use('/user', userRouter);

//START SERVER LISTENING
app.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
}) 

