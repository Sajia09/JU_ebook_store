/**
 

* Controller for book-related operations.
 * @module controllers/bookController
 */

const Book = require('../models/Book');

/**
 * Search for books by title.
 * @param {string} searchTerm - The search term to match against book titles.
 * @returns {Promise<Array>} - A promise that resolves to an array of books.
 */
exports.searchBooks = async (searchTerm) => {
  try {
    const regex = new RegExp(searchTerm, 'i');
    return await Book.find({ title: regex });
  } catch (error) {
    console.error('Error searching books:', error);
    throw error;
  }
};


