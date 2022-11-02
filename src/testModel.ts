import Books from "./database/models/BookModel"
import Comments from "./database/models/ComentModel";

(async () => {

  const books = await Books.findAll({ raw: true });
  console.table(books);
  process.exit(0);
  const comments = await Comments.findAll({ raw: true });
  console.table(comments);
  const booksWithComments = await Books.findAll({ raw: true, include: ['comments'] });
  console.table(booksWithComments);
})();