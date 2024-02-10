

const { getdb } = require('ebookstoreg');

class UserModel {
  constructor(database) {
    this.db = database;
    this.collectionName = 'users';
    this.collection = this.db.collection(this.collectionName);
  }

  /**
   * Creates a new user profile.
   * @param {string} name - The name of the user.
   * @param {string} email - The email address of the user.
   * @param {string} phone - The phone number of the user.
   * @returns {Promise<Object>} The created user object.
   */
  async createUser(name, email, phone) {
    try {
      const result = await this.collection.insertOne({ name, email, phone });
      return result.ops[0];
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  /**
   * Updates the user profile with the provided attributes.
   * @param {string} userId - The ID of the user.
   * @param {string} name - The new name for the user.
   * @param {string} email - The new email address for the user.
   * @param {string} phone - The new phone number for the user.
   * @returns {Promise<Object>} The updated user object.
   */
  async updateUser(userId, name, email, phone) {
    try {
      const result = await this.collection.updateOne(
        { _id: ObjectId(userId) },
        { $set: { name, email, phone } }
      );
      return result.modifiedCount === 1 ? { name, email, phone } : null;
    } catch (error) {
      throw new Error('Failed to update user');
    }
  }

  /**
   * Removes the user profile with the specified ID.
   * @param {string} userId - The ID of the user to be removed.
   * @returns {Promise<boolean>} True if the user is removed successfully, false otherwise.
   */
  async removeUser(userId) {
    try {
      const result = await this.collection.deleteOne({ _id: ObjectId(userId) });
      return result.deletedCount === 1;
    } catch (error) {
      throw new Error('Failed to remove user');
    }
  }
}

module.exports = UserModel;
