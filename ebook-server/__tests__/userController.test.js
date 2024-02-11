const userController = require('../controllers/UserProfile.js');

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

describe('userController', () => {
  let userControllerInstance;

  beforeEach(() => {
    // Mocking the database connection
    const database = {};
    userControllerInstance = new userController(database);
  });

  describe('updateUser', () => {
    it('should update the user profile', async () => {
      const userId = 'someuserid';
      const name = 'John Doe';
      const email = 'john@example.com';
      const phone = '1234567890';
      const age = 30;
      const address = '123 Main St';

      const updatedUser = await userControllerInstance.updateUser(userId, name, email, phone, age, address);

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
      userControllerInstance.userModel.updateUser.mockRejectedValue(new Error('Failed to update user'));

      await expect(userControllerInstance.updateUser(userId, name, email, phone, age, address)).rejects.toThrow('Failed to update user');
    });
  });
});
