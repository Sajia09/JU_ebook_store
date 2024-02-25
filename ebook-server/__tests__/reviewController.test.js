const ReviewController = require('../controllers/ReviewController');
const ReviewModel = require('../models/ReviewModel');

jest.mock('../models/ReviewModel');

describe('ReviewController', () => {
  it('should create a new review successfully', async () => {
    const req = {
      params: {
        bookId: 'someBookId',
      },
      body: {
        user: 'John Doe',
        rating: 4,
        content: 'Great book!',
      },
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    ReviewModel.createReview.mockResolvedValue({
      user: 'John Doe',
      rating: 4,
      content: 'Great book!',
    });

    await ReviewController.createReview(req, res);

    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      user: 'John Doe',
      rating: 4,
      content: 'Great book!',
    }));
    expect(res.status).not.toHaveBeenCalled();
  });

  it('should return a 400 status for missing user field', async () => {
    const req = {
      params: {
        bookId: 'someBookId',
      },
      body: {
        rating: 4,
        content: 'Great book!',
      },
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    await ReviewController.createReview(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Missing user field' });
  });

  it('should return a 500 status for an error during review creation', async () => {
    const req = {
      params: {
        bookId: 'someBookId',
      },
      body: {
        user: 'John Doe',
        rating: 4,
        content: 'Great book!',
      },
    };

    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    ReviewModel.createReview.mockRejectedValue(new Error('Test Error'));

    await ReviewController.createReview(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });
});
