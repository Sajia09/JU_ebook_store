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
      // Validate email and phone number formats
      if (!this.validateEmail(email)) {
        throw new Error('Invalid email format');
      }

      if (!this.validatePhone(phone)) {
        throw new Error('Invalid phone number format');
      }

      // Update user profile in the database
      const result = await this.collection.updateOne(
        { _id: ObjectId(userId) },
        { $set: { name, email, phone, age, address } }
      );

      // Check if user profile was updated successfully
      return result.modifiedCount === 1 ? { name, email, phone, age, address } : null;
    } catch (error) {
      throw new Error('Failed to update user: ' + error.message);
    }
  }

  /**
   * Validates the email format.
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if the email is valid, false otherwise.
   */
  validateEmail(email) {
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validates the phone number format.
   * @param {string} phone - The phone number to validate.
   * @returns {boolean} True if the phone number is valid, false otherwise.
   */
  validatePhone(phone) {
    // Basic phone number validation using regex
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
}

module.exports = UserModel;

