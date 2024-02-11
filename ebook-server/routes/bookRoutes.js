const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

/**
 * Routes related to books.
 * @module routes/bookRoutes
 */

/**
 * Search for books.
 * @name GET/api/books
 * @param {string} search - The search term.
 * @returns {Array} - An array of books matching the search term.
 */
router.get('/', async (req, res) => {
  const { search } = req.query;
  try {
    const books = await bookController.searchBooks(search);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
