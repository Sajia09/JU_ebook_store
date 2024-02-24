// orderController.test.js

const request = require('supertest');
const app = require('D:/CSE/4 Fourth Year/4-2/SQA PROJECT/Orthi/JU_ebook_store/ebook-server/App.js');


describe('Integration Test: Track Order Functionality', () => {
  // Positive scenario: Tracking an existing order
  test('GET /orders/:id - Track an existing order', async () => {
    const orderId = 'valid-order-id'; // Provide a valid order ID

    const response = await request(app).get(`/orders/${orderId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id', orderId);
    // Add more assertions based on the expected order details
  });

  // Negative scenario: Tracking a non-existent order
  test('GET /orders/:id - Track a non-existent order', async () => {
    const orderId = 'non-existent-order-id'; // Provide a non-existent order ID

    const response = await request(app).get(`/orders/${orderId}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Order not found');
  });

  // Error handling scenario: Internal server error
  test('GET /orders/:id - Internal Server Error', async () => {
    const orderId = 'invalid-order-id'; // Provide an invalid order ID

    const response = await request(app).get(`/orders/${orderId}`);

    expect(response.status).toBe(500);
    // Add more assertions to ensure proper error handling
  });
});
