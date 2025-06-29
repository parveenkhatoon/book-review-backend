import { Book } from '../models/book.model';
export const getAllBooks = async () => Book.findAll();
export const createBook = async (data: { title: string; author: string }) => Book.create(data);