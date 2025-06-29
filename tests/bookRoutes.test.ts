import request from 'supertest';
import app from '../src/app';
import * as db from '../src/db'; 

// jest.mock('../src/db'); 
jest.mock('../src/models/book.model', () => ({
  Book: {
    findAll: jest.fn(),
    findByPk: jest.fn(),
  }
}));

describe('GET /books/:id/reviews', () => {
  it('should return list of reviews', async () => {
    const mockReviews = [
      { reviewer: 'Author Parveen', comment: 'OMG book!' },
      { reviewer: 'Author Name', comment: 'OMG book!' },
    ];

    (db.getReviewsByBookId as jest.Mock).mockResolvedValue(mockReviews);

    const res = await request(app).get('/books/1/reviews');

    expect(res.status).toBe(200);
    expect(res.body.reviews).toEqual(mockReviews);
  });

  it('should return 500 on DB error', async () => {
    (db.getReviewsByBookId as jest.Mock).mockRejectedValue(new Error('fail'));

    const res = await request(app).get('/books/1/reviews');

    expect(res.status).toBe(500);
    expect(res.body.error).toBe('Failed to fetch reviews');
  });
});
