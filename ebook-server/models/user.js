const { ObjectId } = require('mongodb');

/**
 * Represents the user model for the E-book store.
 */
class UserModel {
  /**
   * Creates an instance of the UserModel.
   * @param {Object} database - The MongoDB database connection.
   */
  constructor(database) {
    this.db = database;
    this.collectionName = 'users';
    this.collection = this.db.collection(this.collectionName);
  }

  
}

module.exports = UserModel;

