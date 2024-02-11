/**
 * Represents a user model in the MongoDB database.
 * @typedef {Object} User
 * @property {string} name - The name of the user.
 * @property {string} email - The email address of the user.
 */

/**
 * Represents a user model.
 * @class
 */
class UserModel {
  /**
   * Creates an instance of UserModel.
   * @constructor
   * @param {Object} db - The MongoDB database connection.
   */
  constructor(db) {
    this.db = db;
    this.collection = this.db.collection('users');
  }

  /**
   * Updates the user profile with the provided name and email.
   * @param {string} id - The ID of the user.
   * @param {string} name - The new name for the user.
   * @param {string} email - The new email address for the user.
   * @returns {Promise<User>} The updated user object.
   */
  async updateProfile(id, name, email) {
    try {
      const result = await this.collection.updateOne(
        { _id: id },
        { $set: { name, email } }
      );
      return result.modifiedCount === 1 ? { name, email } : null;
    } catch (error) {
      throw new Error('Failed to update profile');
    }
  }
}

module.exports = UserModel;

