const Book = require('../models/Book');

/**
 * Controller for handling book-related operations.
 * @module controllers/bookController
 */

/**
 * Search for books.
 * @param {string} searchTerm - The term to search for.
 * @returns {Promise<Array>} - A promise that resolves to an array of books.
 */
const searchBooks = async (searchTerm) => {
  try {
    const regex = new RegExp(searchTerm, 'i');
    return await Book.find({ title: regex });
  } catch (error) {
    console.error('Error searching books:', error);
    throw error;
  }
};

module.exports = {
  searchBooks,
};
