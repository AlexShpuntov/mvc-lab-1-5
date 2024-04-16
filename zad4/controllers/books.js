const Book = require('../models/book');

exports.getBooks = (req, res) => {
  const books = [{
    "Id": "1",
    "title": "Lorem ipsum",
    "publishingYear": "2001",
    "authorId": "1"
  }];
  res.render('books', { books });
};

exports.addBook = (req, res) => {
  const { title, publishingYear, authorId } = req.body;
  const id = new Date().getTime();
  const newBook = { id, title, publishingYear, authorId };
  books.push(newBook);
  res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
  const id  = req.params.id;
  books = books.filter(book => book.id !== parseInt(id));
  res.redirect('/book/list');
};

exports.getBookDetails = (req, res) => {
  const { id } = req.params;
  const book = books.find(book => book.id === parseInt(id));
  if (book) {
    res.render('book', { book });
  } else {
    res.status(404).send('Book not found');
  }
};