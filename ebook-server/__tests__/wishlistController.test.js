const wishlistController = require('../server/controllers/wishlistController');
const Wishlist = require('../server/models/Wishlist');

jest.mock('../server/models/Wishlist');

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
});
