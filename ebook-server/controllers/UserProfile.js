/**
 * Represents a controller for managing user profiles in the e-book store.
 * @class
 */
class UserProfileController {
    /**
     * Creates an instance of UserProfileController.
     * @constructor
     * @param {UserModel} model - The UserModel instance.
     * @param {UserProfileView} view - The UserProfileView instance.
     */
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    /**
     * Updates the user profile with the provided name and email.
     * @param {string} name - The new name for the user.
     * @param {string} email - The new email address for the user.
     */
    updateProfile(name, email) {
      // Validate user input
      if (!ValidationUtil.isValidEmail(email)) {
        console.log('Invalid email');
        return;
      }
  
      // Update user profile
      this.model.updateProfile(name, email);
  
      // Display updated profile
      this.view.displayProfile(this.model);
    }
  }
  