import { NextFunction, Request, Response } from "express";
import statusCodes from "../statusCode";
import Book from '../interfaces/book.interface';

const properties = ['title', 'price', 'author', 'isbn'];

function validateProperties(book: Book): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1 ) {
    if (!Object.prototype.hasOwnProperty.call(book, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null]
}

function validationBook(req: Request, res: Response, next: NextFunction) {
  const book = req.body;

  let [valid, property] = validateProperties(book);

  if (!valid) {
    return res.status(statusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    )
  }

  next();
}

export default validationBook
