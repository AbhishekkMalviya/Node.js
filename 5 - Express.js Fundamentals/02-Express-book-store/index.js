const { error } = require('console');
const express = require('express');

const app = express();
const PORT = 8000;

const books = [
    { id: 1, title: 'Book 1', author: 'Author1' },
    { id: 2, title: 'Book 2', author: 'Author2' },
]

app.use(express.json()); //middleware (plugin to accept json data and put in db(internal here))

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const book = books.find((e) => e.id == id);

    if (isNaN(id)) return res.status(400).json({ error: "id must be number" }
    )
    if (!book) return res.status(404).end(`book with id ${id} does not exists`)

    return res.json(book)
})

app.post('/books', (req, res) => {
    const { title, author } = req.body;

    if (!title || title === '')
        return res.status(400).json({ error: `Title is required` });
    if (!author || author === '')
        return res.status(400).json({ error: `Author is required` });

    const id = books.length + 1;

    const book = { id, title, author }
    books.push(book)

    return res.status(201).json({ message: `Book is created successfully` });
})

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) return res.status(404).json({ error: "id must be number" });

    const indexToDelete = books.findIndex((e) => e.id === id)

    if (indexToDelete < 0)
        return res.status(404)
            .json({ error: `Book with id ${id} does not exist.` });

    books.splice(indexToDelete, 1);

    return res.status(200).json({ message: `book with id ${id} deleted successfully` });
})

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));