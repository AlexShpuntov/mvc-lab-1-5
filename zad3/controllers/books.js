let books = [{
  "Id": "1",
  "title": "Lorem ipsum",
  "publishingYear": "2001",
  "authorId": "1"
}];

exports.addBook = (req, res) => {
  const { title, publishingYear, authorId } = req.body;
  const id = new Date().getTime();
  const newBook = { id, title, publishingYear, authorId };
  books.push(newBook);
  res.redirect('/book/list');
};

// Usuwanie książki
exports.deleteBook = (req, res) => {
  const { id } = req.params;
  books = books.filter(book => book.id !== parseInt(id));
  res.redirect('/book/list');
};