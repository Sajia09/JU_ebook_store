// /**
//  * Tests for the book controller.
//  * @module __tests__/bookController
//  */

// const { searchBooks } = require('../controllers/bookController');
// const Book = require('../models/Book');

// jest.mock('../models/Book');

// /**
//  * Test suite for the searchBooks function.
//  */
// describe('searchBooks', () => {

//     /**
//    * Test case to verify searchBooks behavior with a valid search term.
//    */
//   it('should return an array of books for a valid search term', async () => {
//     const searchTerm = 'Harry Potter';
//     const expectedBooks = [{ title: 'Harry Potter and the Sorcerer\'s Stone' }];
//     Book.find.mockResolvedValue(expectedBooks);

//     const result = await searchBooks(searchTerm);
//     expect(result).toEqual(expectedBooks);
//   });
// /**
//    * Test case to verify searchBooks behavior with an invalid search term.
//    */
//   it('should return an empty array for an invalid search term', async () => {
//     const searchTerm = 'Invalid Search Term';
//     Book.find.mockResolvedValue([]);

//     const result = await searchBooks(searchTerm);
//     expect(result).toEqual([]);
//   });
// });

/**
 * Tests for the book controller.
 * @module __tests__/bookController
 */

const { searchBooks } = require('../controllers/bookController');
const Book = require('../models/Book');

// Mocking the Book model
jest.mock('../models/Book');

/**
 * Test suite for the searchBooks function.
 */
describe('searchBooks', () => {
    /**
     * Test case to verify searchBooks behavior with a valid search term.
     * @name should return an array of books for a valid search term
     * @function
     * @memberof module:__tests__/bookController
     * @inner
     */
    it('should return an array of books for a valid search term', async () => {
        const searchTerm = 'Harry Potter';
        const expectedBooks = [{ title: 'Harry Potter and the Sorcerer\'s Stone' }];
        Book.find.mockResolvedValue(expectedBooks);

        const result = await searchBooks(searchTerm);
        expect(result).toEqual(expectedBooks);
    });

    /**
     * Test case to verify searchBooks behavior with an invalid search term.
     * @name should return an empty array for an invalid search term
     * @function
     * @memberof module:__tests__/bookController
     * @inner
     */
    it('should return an empty array for an invalid search term', async () => {
        const searchTerm = 'Invalid Search Term';
        Book.find.mockResolvedValue([]);

        const result = await searchBooks(searchTerm);
        expect(result).toEqual([]);
    });

    /**
     * Test case to verify searchBooks behavior when no search term is provided.
     * @name should return an empty array when no search term is provided
     * @function
     * @memberof module:__tests__/bookController
     * @inner
     */
    it('should return an empty array when no search term is provided', async () => {
        const searchTerm = '';
        Book.find.mockResolvedValue([]);

        const result = await searchBooks(searchTerm);
        expect(result).toEqual([]);
    });

    /**
     * Test case to verify searchBooks behavior when an error occurs during database query.
     * @name should throw an error if an error occurs during database query
     * @function
     * @memberof module:__tests__/bookController
     * @inner
     */
    it('should throw an error if an error occurs during database query', async () => {
        const searchTerm = 'Error';
        const errorMessage = 'Database Error';
        Book.find.mockRejectedValue(new Error(errorMessage));

        await expect(searchBooks(searchTerm)).rejects.toThrow(errorMessage);
    });

    /**
     * Test case to verify searchBooks behavior when books are not found for the search term.
     * @name should return an empty array when no books are found for the search term
     * @function
     * @memberof module:__tests__/bookController
     * @inner
     */
    it('should return an empty array when no books are found for the search term', async () => {
        const searchTerm = 'Nonexistent Book';
        Book.find.mockResolvedValue([]);

        const result = await searchBooks(searchTerm);
        expect(result).toEqual([]);
    });
});
