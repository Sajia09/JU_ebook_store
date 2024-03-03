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
      
    
        // Check if amount is a number
        if (isNaN(amount)) {
            return res.status(400).json({ message: 'Amount must be a number' });
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
        expect(response.status).toBe(400);// Expecting status code 400 for missing order details
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
        expect(response.status).toBe(500);// Expecting status code 500 for failing payment processing
        expect(response.body.message).toBe('Payment processing failed');
    });
    it('should return 201 and a success message on successful payment processing', async () => {
        // Mocking Payment.create to resolve successfully
        Payment.create = jest.fn().mockResolvedValueOnce({}); // Mocking a successful payment creation
    
        const order = {
            orderId: '54321',
            amount: 200,
        };
    
        const response = await request(app)
            .post('/payment')
            .send(order);
    
        expect(response.status).toBe(201); // Expecting status code 201 for successful payment processing
        expect(response.body.message).toBe('Payment processed successfully'); // Expecting success message for successful payment processing
    });
    it('should return 400 if amount is not a number', async () => {
        const order = {
            orderId: '12345',
            amount: 'invalid', // Setting amount as a string 'invalid' to simulate an invalid input
        };
        const response = await request(app)
            .post('/payment')
            .send(order);
        expect(response.status).toBe(400);// Expecting status code 201 for amount is not a number
        expect(response.body.message).toBe('Amount must be a number');
    });
   
});

// Export the Express app instance (optional)
module.exports = app;
