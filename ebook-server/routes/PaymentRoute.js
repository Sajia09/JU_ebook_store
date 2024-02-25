/**
 * Routes for payment functionality.
 * @module Routes/PaymentRoutes
 */

const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/PaymentController');

/**
 * POST request to process payment for an order.
 * @name POST/api/payment
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The payment confirmation.
 */
router.post('/payment', async (req, res) => {
    try {
        const order = req.body; // Assuming the order details are sent in the request body
        const paymentConfirmation = await PaymentController.processPayment(order);
        res.json(paymentConfirmation);
    } catch (error) {
        res.status(500).json({ message: 'Failed to process payment' });
    }
});

module.exports = router;