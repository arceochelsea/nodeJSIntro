const express = require('express');

const userRouter = express.Router();

userRouter.get('/userRouter', (req, res) => {
    res.send('You are on a userpage');
});

module.exports = userRouter;

//handles all user routes 