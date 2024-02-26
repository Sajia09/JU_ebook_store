// tests/cart.test.js
const request = require('supertest');
const app = require('../src/server');

describe('POST /cart/add', () => {
  test('It should add a book to the cart', async () => {
    const response = await request(app)
      .post('/cart/add')
      .send({ book: { title: 'Book1', author: 'Author1', price: 19.99 } });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('title', 'Book1');
  });

  // Add more test cases (total 5)
});
