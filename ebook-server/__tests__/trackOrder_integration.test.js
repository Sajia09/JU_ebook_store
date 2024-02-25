const request = require('supertest');
const express = require('express');
const Order = require('D:/CSE/4 Fourth Year/4-2/SQA PROJECT/Orthi/JU_ebook_store/ebook-server/models/Order.js'); // Assuming this is the correct path to your Order model

// Create an instance of Express
const app = express();

// Define the routes
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/api/trackOrder/:orderId', async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await Order.findOne({ orderId });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order found', order });
    } catch (error) {
        console.error('Error tracking order:', error.message);
        res.status(500).json({ message: 'Error tracking order' });
    }
});

// Define track order integration test
describe('Track Order Integration Test', () => {
    it('should return 404 if order is not found', async () => {
        jest.setTimeout(25000); // Increase the timeout to 15 seconds

        const response = await request(app)
            .get('/api/trackOrder/123456'); // Provide a non-existent order ID
        expect(response.status).toBe(404);
        expect(response.body.message).toBe('Order not found');
    });

    it('should return 500 if tracking order fails', async () => {
        // Mocking Order.findOne to throw an error
        Order.findOne = jest.fn().mockRejectedValueOnce(new Error('Error tracking order'));
        
        const response = await request(app)
            .get('/api/trackOrder/123'); // Provide a valid order ID
        expect(response.status).toBe(500);
        expect(response.body.message).toBe('Error tracking order');
    });

    it('should return 200 and order details if order is found', async () => {
        // Mocking Order.findOne to return a sample order
        const mockOrder = { orderId: '123', status: 'pending' };
        Order.findOne = jest.fn().mockResolvedValueOnce(mockOrder);
        
        const response = await request(app)
            .get('/api/trackOrder/123'); // Provide a valid order ID
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Order found');
        expect(response.body.order).toEqual(mockOrder);
    });
});

// Export the Express app instance (optional)
module.exports = app;
