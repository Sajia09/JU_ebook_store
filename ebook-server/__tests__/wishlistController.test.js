<<<<<<< HEAD
const wishlistController = require('f:/keya/ebook-server/controllers/wishlistController.js');
const Wishlist = require("f:/keya/ebook-server/models/Wishlist.js");

jest.mock('f:/keya/ebook-server/models/Wishlist');

describe('Wishlist Controller', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should get all books from the wishlist', async () => {
        Wishlist.find.mockResolvedValueOnce([{ title: 'Book 1' }, { title: 'Book 2' }]);
        const books = await wishlistController.getAllBooks();
        expect(books).toEqual([{ title: 'Book 1' }, { title: 'Book 2' }]);
        expect(Wishlist.find).toHaveBeenCalledTimes(1);
    });

    it('should add a book to the wishlist', async () => {
        const newBook = { title: 'New Book', author: 'Author' };
        Wishlist.create.mockResolvedValueOnce(newBook);
        const book = await wishlistController.addToWishlist(newBook);
        expect(book).toEqual(newBook);
        expect(Wishlist.create).toHaveBeenCalledTimes(1);
        expect(Wishlist.create).toHaveBeenCalledWith(newBook);
    });

    it('should throw an error when getting books from the wishlist fails', async () => {
        Wishlist.find.mockRejectedValueOnce(new Error('Failed to retrieve books from the wishlist'));
        await expect(wishlistController.getAllBooks()).rejects.toThrow('Failed to retrieve books from the wishlist');
        expect(Wishlist.find).toHaveBeenCalledTimes(1);
    });

    it('should throw an error when adding a book to the wishlist fails', async () => {
        const newBook = { title: 'New Book', author: 'Author' };
        Wishlist.create.mockRejectedValueOnce(new Error('Failed to add book to the wishlist'));
        await expect(wishlistController.addToWishlist(newBook)).rejects.toThrow('Failed to add book to the wishlist');
        expect(Wishlist.create).toHaveBeenCalledTimes(1);
        expect(Wishlist.create).toHaveBeenCalledWith(newBook);
    });

    it('should throw an error when adding a book with missing fields to the wishlist', async () => {
        const incompleteBook = { title: 'Incomplete Book' };
        await expect(wishlistController.addToWishlist(incompleteBook)).rejects.toThrow('Book title and author are required.');
        expect(Wishlist.create).not.toHaveBeenCalled();
    });
    
=======
const WishlistController = require('F:/Tanzila/ebook-server/controllers/wishlistController.js');
const Wishlist = require('F:/Tanzila/ebook-server/models/modelWishlist.js');

// Mocking the Wishlist model methods
jest.mock('F:/Tanzila/ebook-server/models/modelWishlist.js');

describe('WishlistController', () => {
  let wishlistController;

  beforeEach(() => {
    wishlistController = new WishlistController();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getWishlist', () => {
    it('should return wishlist array for a valid user ID', async () => {
      const userId = 'validUserId';
      const expectedWishlist = ['bookId1', 'bookId2'];
      Wishlist.getWishlist.mockResolvedValue(expectedWishlist);

      const wishlist = await wishlistController.getWishlist(userId);

      expect(wishlist).toEqual(expectedWishlist);
    });
  });

  describe('addToWishlist', () => {
    it('should add a book to the wishlist for a valid user ID and book ID', async () => {
      const userId = 'validUserId';
      const bookId = 'bookId3';
      const updatedWishlist = ['bookId1', 'bookId2', 'bookId3'];
      Wishlist.addToWishlist.mockResolvedValue(updatedWishlist);

      const wishlist = await wishlistController.addToWishlist(userId, bookId);

      expect(wishlist).toEqual(updatedWishlist);
    });
  });

  describe('removeFromWishlist', () => {
    it('should remove a book from the wishlist for a valid user ID and book ID', async () => {
      const userId = 'validUserId';
      const bookId = 'bookId1';
      const updatedWishlist = ['bookId2'];
      Wishlist.removeFromWishlist.mockResolvedValue(updatedWishlist);

      const wishlist = await wishlistController.removeFromWishlist(userId, bookId);

      expect(wishlist).toEqual(updatedWishlist);
    });
  });
>>>>>>> 26a2c94998989cd7620ff3e97e980b21e978dfa5
});
