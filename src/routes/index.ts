import express from 'express';
import * as bookCtrl from '../controllers/book.controller';
import * as reviewCtrl from '../controllers/review.controller';
const router = express.Router();
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     responses:
 *       200:
 *         description: List of books
 */
router.get('/books', bookCtrl.getBooks);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Add a new book
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       201:
 *         description: Book created
 */
router.post('/books', bookCtrl.createBook);
/**
 * @swagger
 * /api/books/{id}/reviews:
 *   get:
 *     summary: Get reviews for a book
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of reviews
 */
router.get('/books/:id/reviews', reviewCtrl.getReviewsByBook);
/**
 * @swagger
 * /api/books/{id}/reviews:
 *   post:
 *     summary: Add reviews for a book
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Add of reviews
 */
router.post('/books/:id/reviews', reviewCtrl.createReview);
export default router;