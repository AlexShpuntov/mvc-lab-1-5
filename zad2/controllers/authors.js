exports.getAuthors = (req, res) => {
  const authors = [{
    "authorId": "1",
    "authorName": "Dolor Sit Amen"
  }];
  res.render('authors', { authors });
};