const jwt = require('jsonwebtoken');
const {secret} = require("../config/config");
const generateToken = (userId) => {
    return jwt.sign({userId}, secret, {expiresIn: '24h'});
};
module.exports = generateToken;