/**
 * Represents a view for displaying user profiles in the e-book store.
 * @class
 */
class UserProfileView {
    /**
     * Creates an instance of UserProfileView.
     * @constructor
     */
    constructor() {}
  
    /**
     * Displays the user profile details in the UI.
     * @param {Object} user - The user object containing profile details.
     * @param {string} user.name - The name of the user.
     * @param {string} user.email - The email address of the user.
     */
    displayProfile(user) {
      // Display user profile details in the UI
      console.log(`Name: ${user.name}, Email: ${user.email}`);
    }
  }
  