/**
 * Tests for the book controller.
 * @module __tests__/bookController
 */

const { searchBooks } = require('../controllers/bookController');
const Book = require('../models/Book');

jest.mock('../models/Book');

/**
 * Test suite for the searchBooks function.
 */
describe('searchBooks', () => {

    /**
   * Test case to verify searchBooks behavior with a valid search term.
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
   */
  it('should return an empty array for an invalid search term', async () => {
    const searchTerm = 'Invalid Search Term';
    Book.find.mockResolvedValue([]);

    const result = await searchBooks(searchTerm);
    expect(result).toEqual([]);
  });
});
