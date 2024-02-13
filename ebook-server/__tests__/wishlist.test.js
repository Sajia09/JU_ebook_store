const wishlistController = require('F:/Tanzila/ebook-server/controllers/wishlistController.js');
const modelWishlist = require('F:/Tanzila/ebook-server/models/modelWishlist.js');

jest.mock('../models/Wishlist');

describe('Wishlist Controller', () => {
  let wishlistController;

  beforeEach(() => {
    wishlistController = new WishlistController();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should add a book to the wishlist', async () => {
    // Mock the addToWishlist method of the WishlistModel
    WishlistModel.addToWishlist.mockResolvedValue({ userId: 'user123', books: ['book456'] });

    // Call the addToWishlist method of the WishlistController
    const result = await wishlistController.addToWishlist('user123', 'book456');

    // Assert the result and method call
    expect(result).toEqual({ userId: 'user123', books: ['book456'] });
    expect(WishlistModel.addToWishlist).toHaveBeenCalledWith('user123', 'book456');
  });

  test('should get the wishlist for a specific user', async () => {
    // Mock the getWishlist method of the WishlistModel
    WishlistModel.getWishlist.mockResolvedValue({ userId: 'user123', books: ['book456', 'book789'] });

    // Call the getWishlist method of the WishlistController
    const result = await wishlistController.getWishlist('user123');

    // Assert the result and method call
    expect(result).toEqual({ userId: 'user123', books: ['book456', 'book789'] });
    expect(WishlistModel.getWishlist).toHaveBeenCalledWith('user123');
  });

  test('should remove a book from the wishlist', async () => {
    // Mock the removeFromWishlist method of the WishlistModel
    WishlistModel.removeFromWishlist.mockResolvedValue({ userId: 'user123', books: ['book789'] });

    // Call the removeFromWishlist method of the WishlistController
    const result = await wishlistController.removeFromWishlist('user123', 'book456');

    // Assert the result and method call
    expect(result).toEqual({ userId: 'user123', books: ['book789'] });
    expect(WishlistModel.removeFromWishlist).toHaveBeenCalledWith('user123', 'book456');
  });
});
