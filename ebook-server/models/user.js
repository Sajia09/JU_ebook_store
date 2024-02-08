/**
 * Represents a user model in the e-book store.
 * @class
 */
class UserModel {
    /**
     * Creates an instance of UserModel.
     * @constructor
     * @param {number} id - The user ID.
     * @param {string} name - The user's name.
     * @param {string} email - The user's email address.
     */
    constructor(id, name, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    /**
     * Updates the user profile with the provided name and email.
     * @param {string} name - The new name for the user.
     * @param {string} email - The new email address for the user.
     */
    updateProfile(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  