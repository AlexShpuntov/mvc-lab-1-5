exports.getBooks = (req, res) => {
  const books = [{
    "Id": "1",
    "title": "Lorem ipsum",
    "publishingYear": "2001",
    "authorId": "1"
  }];
  if (books.length === 0) {
    res.render('books', { books, message: 'No books have been found' });
  } else res.render('books', { books });
};