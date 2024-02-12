const Book = require('../models/Book');

/**
 * Searches for books matching the given search term.
 * @param {string} searchTerm - The search term to match against book titles.
 * @returns {Promise<Array<Object>>} - A promise that resolves with an array of books matching the search term.
 * @throws {Error} If an error occurs while searching for books.
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
