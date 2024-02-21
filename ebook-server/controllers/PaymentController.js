/**
 * Controller for managing payment functionality.
 * @module Controllers/PaymentController
 */

const Payment = require('../models/Payment');

/**
 * Process payment for an order.
 * @function
 * @name processPayment
 * @param {Object} order - The order object containing payment details.
 * @returns {Promise<Object>} The payment confirmation.
 */