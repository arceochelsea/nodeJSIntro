const User = require('../models/User');

const findUser = async ( req, res, next) => {

    const userId = req.params.id; //only in the scope of findUser function

    try {

        if (typeof(userId) !== 'string' || userId.length !== 24) {
            console.error('An invalid ID was given')
            return res.status(400).json({message: 'Invalid ID Given'})
        }

        console.log(userId.length)
        
        const user = await User.findById(userId);
        console.log(user)

        if (user === null) {
            console.error('No user was found')
            return res.status(404).json({message: 'No User Found'})
        }

        req.userId = userId; 

        next()

    } catch (err) {
        const msg = err.message || err;
        console.error(msg);
        res.status(500).json({
            message: msg
        })
    }


}

module.exports = findUser;