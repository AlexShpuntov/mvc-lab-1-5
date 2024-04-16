exports.getBooks = (req, res) => {
  const books = [{
    "Id": "1",
    "title": "Lorem ipsum",
    "publishingYear": "2001",
    "authorId": "1"
  }];
  res.render('books', { books });
};