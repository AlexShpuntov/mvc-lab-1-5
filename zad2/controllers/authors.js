exports.getAuthors = (req, res) => {
  const authors = [{
    "authorId": "1",
    "authorName": "Dolor Sit Amen"
  }];
  if (authors.length === 0) {
    res.render('authors', { authors, message: "No authors have been found"});
  } else res.render('authors', { authors });
};