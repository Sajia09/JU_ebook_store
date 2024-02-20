// ReviewController.js file (review controller)
import { createReview as _createReview } from '../models/ReviewModel';
import { getBookById as _getBookById } from '../models/Book';

/**
 * Controller for managing review operations.
 */
class ReviewController {
  /**
   * Create a new review for a book.
   * @param {object} req - Express request object
   * @param {object} res - Express response object
   * @returns {Promise<void>} - Promise representing the operation completion
   */
  async createReview(req, res) {
    const { bookId } = req.params;
    const { user, rating, content } = req.body;

    try {
      const createdReview = await _createReview(bookId, { user, rating, content });

      // Respond with the created review
      res.json(createdReview);
    } catch (error) {
      console.error('Error creating review:', error);
      // Handle the error and respond with an error status
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default new ReviewController();
