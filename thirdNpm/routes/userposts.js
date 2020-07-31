//subrouter for users that'll be the post
//then create a post route
//router.post
//
const express = require('express');
const router = express.Router();

router.post('/newUser', (req, res) => {
    console.log({
        "email-address": "emailhereyo@gmail.com",
        "password": "password123"
    });
    res.send('blahblah') //no params 
    //req.query is built on the frontend, as is the body
})

module.exports = router;