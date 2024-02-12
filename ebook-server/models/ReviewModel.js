const { getDb } = require('ebookstore');

const getReviewCollection = async () => {
  const db = await getDb();
  return db.collection('reviews');
};

module.exports = {
  async createReview(bookId, review) {
    const reviewCollection = await getReviewCollection();
    const result = await reviewCollection.insertOne({ bookId, ...review });
    return result.ops[0];
  },
};