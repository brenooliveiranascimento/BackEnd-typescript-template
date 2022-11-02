import BookModel from '../database/models/BookModel';
import Book from '../interfaces/book.interface';

class BookService {

  public async getAll(): Promise<Book[]> {
    const books = await BookModel.findAll();
    return books;
  }
}

export default BookService;
