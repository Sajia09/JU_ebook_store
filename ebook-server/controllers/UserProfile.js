const UserModel = require('D:/CSE/4 Fourth Year/4-2/SQA PROJECT/Orthi/JU_ebook_store/ebook-server/models/user.js');

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
   * @param {string} password - The new password of the user.
   * @returns {Promise<Object>} The updated user object.
   */
  async updateUser(userId, name, email, phone, age, address, password) {
    try {
      // Validate parameters
      if (!userId) {
        throw new Error('User ID is required');
      }
      if (!email) {
        throw new Error('Email is required');
      }
      if (!password || password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }
      if (age < 0) {
        throw new Error('Age must be a positive number');
      }
      if (!this.validatePhoneNumber(phone)) {
        throw new Error('Invalid phone number');
      }

      // Update user profile
      const updatedUser = await this.userModel.updateUser(userId, name, email, phone, age, address, password);
      return updatedUser;
    } catch (error) {
      throw new Error('Failed to update user: ' + error.message);
    }
  }

  /**
   * Validates the format of the phone number.
   * @param {string} phone - The phone number to validate.
   * @returns {boolean} Returns true if the phone number is valid, otherwise false.
   */
  validatePhoneNumber(phone) {
    // Regular expression to match a simple format of a phone number (10 digits)
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
}

module.exports = UserController;
