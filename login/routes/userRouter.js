const { Router } = require('express');

const router = new Router ();

const userPost = require('./userPost.js');

router.use('/post', userPost)

router.patch('/login', (req, res) => {
    console.log(req.body);

    try {

        res.json({message: 'success!'})

    }catch (error) {
        console.error(error.message);

        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router;

