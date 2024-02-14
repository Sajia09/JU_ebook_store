// reviewRoutes.js file (review route)
const express = require('express');
const router = express.Router();
import ReviewController from '../controllers/ReviewController';

/**
 * @typedef {object} ExpressRequest
 * @property {object} params - Parameters from the URL
 * @property {object} body - The body of the request
 */

/**
 * @typedef {object} ExpressResponse
 * @property {(status: number) => ExpressResponse} status - Set the status code of the response
 * @property {(data: object) => void} json - Send a JSON response
 */

/**
 * Router for managing review operations.
 * @namespace ReviewRoutes
 */

/**
 * @function POST /api/books/:bookId/reviews
 * @memberof ReviewRoutes
 * @param {ExpressRequest} req - Express request object
 * @param {ExpressResponse} res - Express response object
 * @returns {Promise<void>} - Promise representing the operation completion
 */
router.post('/:bookId/reviews', async (req, res) => {
  const { bookId } = req.params;
  const { user, rating, content } = req.body;

  try {
    await ReviewController.createReview(req, res);

    // Respond with a success message
    res.json({ message: 'Review created successfully' });
  } catch (error) {
    console.error('Error creating review:', error);
    // Handle the error and respond with an error status
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
