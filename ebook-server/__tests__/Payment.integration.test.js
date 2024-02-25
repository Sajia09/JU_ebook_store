const request = require('supertest');
const express = require('express');
const Payment = require('f:/keya/ebook-server/models/PaymentModel.js');

// Create an instance of Express
const app = express();

// Define the routes
app.use(express.json()); // Middleware to parse JSON bodies

app.post('/payment', async (req, res) => {
    try {
        // Extract orderId and amount from the request body
        const { orderId, amount } = req.body;
        
        // Check if orderId and amount are present
        if (!orderId || !amount) {
            return res.status(400).json({ message: 'Order details are missing' });
        }

        // Process the payment (assuming Payment.create is a function to create payment records)
        const payment = await Payment.create({ orderId, amount });

        // Send success response
        res.status(201).json({ message: 'Payment processed successfully', payment });
    } catch (error) {
        // Log error and send failure response
        console.error('Error processing payment:', error.message); // Print only the error message for debugging
        res.status(500).json({ message: 'Payment processing failed' });
    } 
});


// Define payment integration test
describe('Payment Integration Test', () => {
    

    it('should return 400 if order details are missing', async () => {
        const response = await request(app)
            .post('/payment')
            .send({}); // Empty request body
        expect(response.status).toBe(400);
        expect(response.body.message).toBe('Order details are missing');
    });

    it('should return 500 if payment processing fails', async () => {
        // Mocking Payment.create to throw an error
        Payment.create = jest.fn().mockRejectedValueOnce(new Error('Payment processing failed'));
        const order = {
            orderId: '54321',
            amount: 200,
        };
        const response = await request(app)
            .post('/payment')
            .send(order);
        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Payment processing failed');
    });
});

// Export the Express app instance (optional)
module.exports = app;