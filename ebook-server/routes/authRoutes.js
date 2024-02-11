/**
 * Routes for authentication-related operations.
 * @module routes/authRoutes
 */

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/login', async (req, res) => {
  const { email, password, userType } = req.body;
  try {
    const token = await authController.login(email, password, userType);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

module.exports = router;
