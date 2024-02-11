const { searchBooks } = require('../controllers/bookController');
const Book = require('../models/Book');

jest.mock('../models/Book');

describe('searchBooks', () => {
  it('should return an array of books for a valid search term', async () => {
    const searchTerm = 'Harry Potter';
    const expectedBooks = [{ title: 'Harry Potter and the Sorcerer\'s Stone' }];
    Book.find.mockResolvedValue(expectedBooks);

    const result = await searchBooks(searchTerm);
    expect(result).toEqual(expectedBooks);
  });

  it('should return an empty array for an invalid search term', async () => {
    const searchTerm = 'Invalid Search Term';
    Book.find.mockResolvedValue([]);

    const result = await searchBooks(searchTerm);
    expect(result).toEqual([]);
  });
});
