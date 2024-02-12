/**
 * Unit tests for the authentication controller.
 * @module __tests__/authController
 */

const { login } = require('../controllers/authController');

// Mock dependencies
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(() => 'mockedToken')
}));

describe('login', () => {
  it('should return JWT token for valid credentials', async () => {
    // Mock the user data
    const mockUser = {
      _id: '123',
      email: 'test@example.com',
      password: 'hashedPassword',
      userType: 'student'
    };
    
    // Mock the user model's findOne method
    jest.mock('../models/User', () => ({
      findOne: jest.fn().mockResolvedValue(mockUser)
    }));

    // Mock bcrypt compare method
    jest.mock('bcrypt', () => ({
      compare: jest.fn().mockResolvedValue(true)
    }));

    // Call the login function
    const token = await login('test@example.com', 'password', 'student');
    
    // Check if token is returned
    expect(token).toEqual('mockedToken');
  });

  it('should throw an error for invalid email or password', async () => {
    // Mock the user model's findOne method
    jest.mock('../models/User', () => ({
      findOne: jest.fn().mockResolvedValue(null)
    }));

    // Call the login function
    await expect(login('invalid@example.com', 'invalidPassword', 'student')).rejects.toThrow('Invalid email or password');
  });

  it('should throw an error for invalid user type', async () => {
    // Mock the user data
    const mockUser = {
      _id: '123',
      email: 'test@example.com',
      password: 'hashedPassword',
      userType: 'teacher' // Invalid userType
    };
    
    // Mock the user model's findOne method
    jest.mock('../models/User', () => ({
      findOne: jest.fn().mockResolvedValue(mockUser)
    }));

    // Mock bcrypt compare method
    jest.mock('bcrypt', () => ({
      compare: jest.fn().mockResolvedValue(true)
    }));

    // Call the login function
    await expect(login('test@example.com', 'password', 'student')).rejects.toThrow('Invalid user type');
  });
});
