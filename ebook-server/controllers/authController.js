const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config');
const User = require('../models/user');

/**
 * Authenticates user and generates JWT token
 * @param {string} email - User's email
 * @param {string} password - User's password
 * @param {string} userType - User's type (student, teacher, admin)
 * @returns {Promise<string>} JWT token
 */
async function login(email, password, userType) {
    const user = await User.findByEmail(email);

    if (!user) {
        throw new Error('Invalid email or password');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        throw new Error('Invalid email or password');
    }

    if (user.userType !== userType) {
        throw new Error('Invalid user type');
    }

    return jwt.sign({ userId: user._id, userType: user.userType }, config.secret, { expiresIn: '24h' });
}

module.exports = { login };
