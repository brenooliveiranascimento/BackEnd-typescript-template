import BookModel from '../database/models/BookModel';
import Book from '../interfaces/book.interface';

class BookService {

  public async getAll(): Promise<Book[]> {
    const books = await BookModel.findAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await BookModel.findByPk(id);
    return book as Book;
  }

  public async create(book: Book) {
    const { author, isbn, price, title } = book;
    const createBook = await BookModel.create({
      author, isbn, price, title
    })
    return createBook
  }

}

export default BookService;
