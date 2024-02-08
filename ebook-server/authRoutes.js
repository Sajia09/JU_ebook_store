const express = require('express');
const { login } = require('../controllers/authController');

const router = express.Router();

/**
 * Login route.
 * @name POST/api/auth/login
 * @param {string} email.body.required - The email of the user.
 * @param {string} password.body.required - The password of the user.
 * @param {string} userType.body.required - The type of user (student, teacher, admin).
 * @returns {object} 200 - JWT token
 * @returns {object} 400 - Error message
 */
router.post('/login', async (req, res) => {
    const { email, password, userType } = req.body;

    try {
        const token = await login(email, password, userType);
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
