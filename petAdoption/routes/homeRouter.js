const express = require('express');

const router = express.Router();

const User = require('./models/Pet');

router.post('/home', async (req, res) => {

    console.log(req.body);

    try {

        await Pet.create(req.body);
        
        res.json({message: 'success!'})

    } catch (error) {

        res.status(500).json({

            message: error.message

        })
    }
})