//packages
let express = require('express');

//imported middleware
const firstMid = require('./middleware/middleware');

//ROUTERS
const userRouter = require('./routes/userRouter');
const homeRouter = require('./routes/homeRouter');

//CONSTANTS
const port = 3000;

//MAIN APP VAR
const app = express();

//MIDDLEWARES/ROUTERS IN USE
app.use(firstMid);
app.use('/', homeRouter);
app.use('/userRouter', userRouter);


//START SERVER LISTENING
app.listen(port, () => { 
    console.log(`Server is now listening on port ${port}`);
}) 

