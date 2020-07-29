//PACKAGES
const express = require('express');
const mongoose = require('mongoose');

//MIDDLES
const firstMid = require('./middleware/firstMiddleware');

//ROUTERS
const homeRouter = require('./routes/homeRouter');

//CONSTANTS
const port = 3000;

//MAIN APP VAR
const app = express();

//MIDDLEWARES/ROUTERS IN USE
app.use(firstMid);

app.use('/', homeRouter);

//START SERVER LISTENING
app.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
}) 

