// /**
// * Controller for book-related operations.
//  * @module controllers/bookController
//  */

// const Book = require('../models/Book');

// /**
//  * Search for books by title.
//  * @param {string} searchTerm - The search term to match against book titles.
//  * @returns {Promise<Array>} - A promise that resolves to an array of books.
//  */
// exports.searchBooks = async (searchTerm) => {
//   try {
//     const regex = new RegExp(searchTerm, 'i');
//     return await Book.find({ title: regex });
//   } 
//   catch (error) {
//     console.error('Error searching books:', error);
//     throw error;
//   }
// };

const Book = require('../models/Book');

/**
 * Purchase a book.
 * 
 * @param {string} title - The title of the book to be purchased.
 * @param {string} author - The author of the book to be purchased.
 * @param {number} price - The price of the book to be purchased.
 * @returns {Promise<object>} A Promise that resolves with the purchased book object.
 */
async function purchaseBook(title, author, price) {
    const newBook = new Book({
        title,
        author,
        price
    });
    return await newBook.save();
}

module.exports = {
    purchaseBook
};
