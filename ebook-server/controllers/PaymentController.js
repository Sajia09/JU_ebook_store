/**
 * Controller for managing payment functionality.
 * @module Controllers/PaymentController
 */

const Payment = require('../models/Payment');
const PaymentService = require('../services/PaymentService');

/**
 * Process payment for an order.
 * @function
 * @name processPayment
 * @param {Object} order - The order object containing payment details.
 * @returns {Promise<Object>} The payment confirmation.
 */
async function processPayment(order) {
    return await PaymentService.processPayment(order);
}

module.exports = {
    processPayment
};