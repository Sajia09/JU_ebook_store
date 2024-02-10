import { getAllBooks as _getAllBooks, getBookById as _getBookById, createBook as _createBook } from '../models/BookModel';

class BookController {
  async getAllBooks(req, res) {
    const books = await _getAllBooks();
    res.json(books);
  }

  async getBookById(req, res) {
    const { id } = req.params;
    const book = await _getBookById(id);
    res.json(book);
  }

  async createBook(req, res) {
    const { title, author, description } = req.body;
    const newBook = { title, author, description, reviews: [] };
    const createdBook = await _createBook(newBook);
    res.json(createdBook);
  }
}

export default new BookController();