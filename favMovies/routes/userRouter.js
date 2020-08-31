const express = require('express');

const router = express.Router();

const User = require('./models/User');

router.post('/profile', async (req, res) => {

    console.log(req.body);

    try {

        await User.create(req.body);
        
        res.json({message: 'success!'})

    } catch (error) {

        res.status(500).json({

            message: error.message

        })
    }
})

router.get('/all', async (req, res) => {
    try {

        const allUsers = await User.find({})

        console.log(allUsers); 

        res.json(allUser) //prints to client side
    
    } catch (error) {
        const msg = error.message || error;
        console.error(msg)
        res.status(500).json({
            message: msg
        })
    }
})