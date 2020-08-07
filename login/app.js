//PACKAGES
const express = require('express');
const mongoose = require('mongoose');

//MIDDLES
//const firstMid = require('./middleware/firstMiddleware');

//ROUTERS
const loginRouter = require('./routes/loginRoute');
//const userRouter = require('./routes/userrouter');

//CONSTANTS
const port = 3000;

//MAIN APP VAR
const app = express();

//MIDDLEWARES/ROUTERS IN USE

app.use(express.json()); //parse the body from a json format to a js object that is workable in js

//MIDDLEWARE THAT ALL ROUTES USE (regardless of request-path or HTTP method) '/' 
//app.use(firstMid);
app.use(express.static('public'))

//USING A ROUTER
app.use('/', loginRouter); //route branches cause they branch off the main one
//app.use('/user', userRouter);

//START SERVER LISTENING
app.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
}) 

// Create a Login Page -
// create a login route in the userRouter file. It should be looking for a PATCH request at the path localhost/user/login
// create a login html with just a js script tag, not hard-coded HTML
// create login frontend js that will create the form for loging in
// set event listener for a login submit button. data should them be compiled from the form to an object that can be sent in the body
// create the XHR that will make a request to your login route (PATCH) sending the form data
// test and make sure you can console log the request body in the route handler