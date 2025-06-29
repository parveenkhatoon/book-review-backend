import { Review } from '../models/review.model';
export const getReviewsForBook = async (bookId: number) => Review.findAll({ where: { bookId } });
export const createReview = async (bookId: number, data: { comment: string }) =>
  Review.create({ comment: data.comment, bookId });