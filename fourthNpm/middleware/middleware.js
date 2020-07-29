const middle = function (req, res, next) {
    
    console.log('This is middleware');

    next()

} 

module.exports = middle; 