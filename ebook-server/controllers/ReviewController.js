// backend/controllers/ReviewController.js
import { createReview as _createReview } from '../models/ReviewModel';
import { getBookCollection } from '../models/BookModel';

/**
 * Controller for managing review operations
 */
class ReviewController {
  /**
   * Create a new review for a book
   * @param {object} req - Express request object
   * @param {object} res - Express response object
   * @returns {Promise<void>} - Promise representing the operation completion
   */
  async createReview(req, res) {
    const { bookId } = req.params;
    const { user, rating, content } = req.body;

    const review = { user, rating, content };
    const createdReview = await _createReview(bookId, review);

    // Add the review ID to the book's reviews array
    const bookCollection = await getBookCollection();
    await bookCollection.updateOne({ _id: bookId }, { $push: { reviews: createdReview._id } });

    res.json(createdReview);
  }
}

export default new ReviewController();