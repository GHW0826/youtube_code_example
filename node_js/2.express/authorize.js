const authorize = (req, res, next) => {
    const {user} = req.query;
    if (user === 'test') {
        req.user = {name:'test', id:3};
        console.log('authorize');
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
};

module.exports = authorize;