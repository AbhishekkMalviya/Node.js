const express = require('express');
const {BOOKS} = require('../db/books')
const router = express.Router();

router.get('/', (req, res) => {
    res.json(BOOKS);
});

router.get('/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const book = BOOKS.find((e) => e.id == id);

    if (isNaN(id)) return res.status(400).json({ error: "id must be number" }
    )
    if (!book) return res.status(404).end(`book with id ${id} does not exists`)

    return res.json(book)
})

router.post('/', (req, res) => {
    const { title, author } = req.body;

    if (!title || title === '')
        return res.status(400).json({ error: `Title is required` });
    if (!author || author === '')
        return res.status(400).json({ error: `Author is required` });

    const id = BOOKS.length + 1;

    const book = { id, title, author }
    BOOKS.push(book)

    return res.status(201).json({ message: `Book is created successfully` });
})

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (isNaN(id)) return res.status(404).json({ error: "id must be number" });

    const indexToDelete = BOOKS.findIndex((e) => e.id === id)

    if (indexToDelete < 0)
        return res.status(404)
            .json({ error: `Book with id ${id} does not exist.` });

    BOOKS.splice(indexToDelete, 1);

    return res.status(200).json({ message: `book with id ${id} deleted successfully` });
})


module.exports = router;