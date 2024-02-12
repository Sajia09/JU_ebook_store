const UserController = require('D:/CSE/4 Fourth Year/4-2/SQA PROJECT/Orthi/JU_ebook_store/ebook-server/controllers/UserProfile.js');

// Mocking the UserModel module
jest.mock('D:/CSE/4 Fourth Year/4-2/SQA PROJECT/Orthi/JU_ebook_store/ebook-server/models/user.js', () => {
  return jest.fn().mockImplementation(() => {
    return {
      updateUser: jest.fn().mockResolvedValue({
        _id: 'someuserid',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        age: 30,
        address: '123 Main St'
      })
    };
  });
});

describe('UserController', () => {
  let userController;

  beforeEach(() => {
    // Mocking the database connection
    const database = {};
    userController = new UserController(database);
  });

  describe('updateUser', () => {
    it('should update the user profile', async () => {
      const userId = 'someuserid';
      const name = 'John Doe';
      const email = 'john@example.com';
      const phone = '1234567890';
      const age = 30;
      const address = '123 Main St';

      const updatedUser = await userController.updateUser(userId, name, email, phone, age, address);

      expect(updatedUser).toEqual({
        _id: 'someuserid',
        name: 'John Doe',
        email: 'john@example.com',
        phone: '1234567890',
        age: 30,
        address: '123 Main St'
      });
    });

    it('should throw an error if updating user fails', async () => {
      const userId = 'someuserid';
      const name = 'John Doe';
      const email = 'john@example.com';
      const phone = '1234567890';
      const age = 30;
      const address = '123 Main St';

      // Mocking a failed update
      userController.userModel.updateUser.mockRejectedValue(new Error('Failed to update user'));

      await expect(userController.updateUser(userId, name, email, phone, age, address)).rejects.toThrow('Failed to update user');
    });

    it('should throw an error if user ID is not provided', async () => {
      const name = 'John Doe';
      const email = 'john@example.com';
      const phone = '1234567890';
      const age = 30;
      const address = '123 Main St';

      await expect(userController.updateUser(null, name, email, phone, age, address)).rejects.toThrow('User ID is required');
    });

    it('should throw an error if email is not provided', async () => {
      const userId = 'someuserid';
      const name = 'John Doe';
      const phone = '1234567890';
      const age = 30;
      const address = '123 Main St';

      await expect(userController.updateUser(userId, name, null, phone, age, address)).rejects.toThrow('Email is required');
    });

    it('should throw an error if age is less than 0', async () => {
      const userId = 'someuserid';
      const name = 'John Doe';
      const email = 'john@example.com';
      const phone = '1234567890';
      const age = -1;
      const address = '123 Main St';

      await expect(userController.updateUser(userId, name, email, phone, age, address)).rejects.toThrow('Age must be a positive number');
    });
  });
});
