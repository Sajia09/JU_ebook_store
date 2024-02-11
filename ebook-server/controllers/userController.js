const UserModel = require('./userModel');

/**
 * Represents the controller for managing user profiles.
 */
class UserController {
  /**
   * Creates an instance of the UserController.
   * @param {Object} database - The MongoDB database connection.
   */
  constructor(database) {
    this.userModel = new UserModel(database);
  }

  /**
   * Updates the user profile with the provided attributes.
   * @param {string} userId - The ID of the user.
   * @param {string} name - The new name for the user.
   * @param {string} email - The new email address for the user.
   * @param {string} phone - The new phone number for the user.
   * @param {number} age - The new age of the user.
   * @param {string} address - The new address of the user.
   * @returns {Promise<Object>} The updated user object.
   */
  async updateUser(userId, name, email, phone, age, address) {
    try {
      // Update user profile
      const updatedUser = await this.userModel.updateUser(userId, name, email, phone, age, address);
      return updatedUser;
    } catch (error) {
      throw new Error('Failed to update user: ' + error.message);
    }
  }
}

module.exports = UserController;
