import { Request, Response } from "express";
import statusCodes from "../statusCode";
import BookService from "../services/books.service";

class BooksController {
  constructor(private bookService = new BookService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(statusCodes.OK).json({message: books, status: 'Sucesso!'});
  };

  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = await this.bookService.getById(id);
    if(!book) return res.status(statusCodes.NOT_FOUND).json({ message: 'Book not found!' });
    
    res.status(statusCodes.OK).json(book);
  };

  public create = async (req: Request, res: Response) => {
    const book = req.body;
    const createBook = await this.bookService.create(book);
    console.log(createBook)
    res.status(statusCodes.OK).json(createBook);
  }

  public update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const book = req.body;

    const bookExist = await this.bookService.getById(id)

    if (!bookExist) return res.status(statusCodes.NOT_FOUND).json({ message: 'Book dont exist' });

    const updatedBooks = await this.bookService.update(book, id);
    return res.status(statusCodes.OK).json({
      message: 'Book updated sufly',
      updatedBooks
    })
    
  }
}

export default BooksController;
