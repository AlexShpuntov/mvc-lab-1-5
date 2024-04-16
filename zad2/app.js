const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use('/', require('./routes/home'));

app.use('/book', require('./routes/books'));
app.use('/author', require('./routes/authors'));

app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
