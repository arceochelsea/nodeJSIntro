const { Router }= require('express');

const router = new Router ();

const User = require('../models/User');

router.patch('/login', function(req, res){

    console.log(req.body, 'login test');

    try {

        res.json({message: 'success!'})

    } catch (error) {

        console.error(error.message);
    
        res.status(500).json({
        
        message: error.message

        })
    }

})

router.post('/register', async (req, res) => {

    console.log(req.body);

    try {

        await User.create(req.body); //creates an instance of the user model, saves it to the database. wont move onto the next line of code until this operation completes.

        res.json({message: 'success'})
        
    } catch (error) {

        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;