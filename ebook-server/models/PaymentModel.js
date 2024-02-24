/**
 * Mongoose schema for Payment.
 * @module Models/Payment
 */

const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    // Define schema fields for payment
    // Example: orderId, paymentStatus, amount, paymentDate, etc.
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;