import { Request, Response } from 'express';
import * as bookService from '../services/book.service';
import client from '../cache/redis';

export const getBooks = async (req: Request, res: Response, next: Function): Promise<void> => {
  try {
    const cached = await client.get('books');
    if (cached) {
      res.json(JSON.parse(cached));
      return;
    }

    const books = await bookService.getAllBooks();
    await client.set('books', JSON.stringify(books), );
    res.json(books);
  } catch (err) {
    next(err); // Forward to error handler middleware if needed
  }
};


export const createBook = async (req: Request, res: Response) => {
  const book = await bookService.createBook(req.body);
  await client.del('books');
  res.status(201).json(book);
};