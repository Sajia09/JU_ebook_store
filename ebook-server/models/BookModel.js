const { getDb } = require('ebookstore');

const getBookCollection = async () => {
  const db = await getDb();
  return db.collection('books');
};

module.exports = {
  async getAllBooks() {
    const bookCollection = await getBookCollection();
    return bookCollection.find().toArray();
  },

  async getBookById(id) {
    const bookCollection = await getBookCollection();
    return bookCollection.findOne({ _id: id });
  },

  async createBook(book) {
    const bookCollection = await getBookCollection();
    const result = await bookCollection.insertOne(book);
    return result.ops[0];
  },
};