const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/envConfig');

module.exports.hasedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
}

module.exports.comparePassword = async (password, dbPassword) => {
    return await bcrypt.compare(password, dbPassword)
}

module.exports.createToken = (user) => {
   return jwt.sign(user, JWT_SECRET, {
        expiresIn: '7d'   //token validate for 7 days after expire

       });
}