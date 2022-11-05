import BookModel from '../database/models/BookModel';
import Comments from '../database/models/ComentModel';
import Book from '../interfaces/book.interface';

class BookService {

  public async getAll(): Promise<Book[]> {
  const booksWithComments = await BookModel.findAll();
    return booksWithComments;
  }

  public async getById(id: number): Promise<Book> {
    const booksWithComments = await BookModel.findByPk(id,
      {include: [
        {
          model: Comments,
          as: 'comments',
        },
      ],
      });
    return booksWithComments as any;
  }

  public async create(book: Book) {
    const { author, isbn, price, title } = book;
    const createBook = await BookModel.create({
      author, isbn, price, title
    })
    return createBook
  }

  public async update(book: Book, id: number) {
    const { author, isbn, price, title } = book;

    const updateBook = await BookModel.update(
      { author, isbn, price, title },
      { where: { id } },
    )

    return updateBook;
  }

}

export default BookService;
