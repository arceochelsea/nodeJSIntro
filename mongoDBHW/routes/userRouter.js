const { Router }= require('express');

const router = new Router ();

const User = require('../models/User');

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

//@path: LH/user/all
//@desp: fetch all user data in the database, does not include sensitive info 
//@access: public

router.get('/all', async (req, res) => {

    try {

        const allUsers = await User.find({}) 

        console.log(allUsers);

        res.json(allUsers);

    } catch (error) {

        const msg = error.message || error;
        console.error(msg)
        res.status(500).json({
            message: msg
        })
    }
})

//@path: LH/user/username/:username
//@desp: fetch all user data in the data, do not include sensitive info 
//@access: public

router.get('/username/:username', async (req, res) => {

    try {

        const query = {username: req.params.username};

        const projection = {email: 1, username: 1, _id: 0};

        const oneUser = await User.findOne(query, projection);

        res.json(oneUser);

    } catch (error) {

        const msg = error.message || err;
        
        console.log(msg);

        res.status(500).json({
            message: msg
        })
    }

})

module.exports = router;