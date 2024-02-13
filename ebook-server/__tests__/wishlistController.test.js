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
});
