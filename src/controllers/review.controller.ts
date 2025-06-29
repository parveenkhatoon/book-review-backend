import { Request, Response } from 'express';
import * as reviewService from '../services/review.service';

export const getReviewsByBook = async (req: Request, res: Response) => {
  const bookId = Number(req.params.id);
  const reviews = await reviewService.getReviewsForBook(bookId);
  res.json(reviews);
};

export const createReview = async (req: Request, res: Response) => {
  const bookId = Number(req.params.id);
  const review = await reviewService.createReview(bookId, req.body);
  res.status(201).json(review);
};