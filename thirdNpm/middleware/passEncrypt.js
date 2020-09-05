const bcrypt = require('bcrypt');


module.exports = async (req, res, next) => {

    try {

        const salt = await bcrypt.genSalt(10);

        console.log('salt', salt);

        const oldPass = req.newUser.password;
        const encryptedPass = await bcrypt.hash( oldPass, salt) //would be the same if you put 10 as the 2nd param

        console.log('\n\nE-pass:', encryptedPass);

        req.newUser.password = encryptedPass;

        next()

    } catch (error) {
        console.error(err.message || err)
        res.status(500).json({
            message: error.message,
            error: err
        })
    }
}