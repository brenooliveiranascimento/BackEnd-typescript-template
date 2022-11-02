import { Request, Response } from "express";
import statusCodes from "../statusCode";
import BookService from "../services/books.service";

class BooksController {
  constructor(private bookService = new BookService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json({message: books, status: 'Sucesso!'});
  };
}

export default BooksController;
