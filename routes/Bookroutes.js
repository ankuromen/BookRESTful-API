const express = require('express');
const router = express.Router();
const Book = require('../model/Book.js');

// Create a new book
router.post('/', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a list of all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get details of a specific book by ID
router.get('/:id', getBook, (req, res) => {
  res.json(res.book);
});

// Update a book's details
router.patch('/:id', getBook, async (req, res) => {
  if (req.body.title != null) {
    res.book.title = req.body.title;
  }
  if (req.body.author != null) {
    res.book.author = req.body.author;
  }
  if (req.body.summary != null) {
    res.book.summary = req.body.summary;
  }
  try {
    const updatedBook = await res.book.save();
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: "Book Not Found" });
  }
});

// Delete a book
router.delete('/:id', getBook, async (req, res) => {
  try {
    await Book.deleteOne({ _id: req.params.id });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: "Book Not Found" });
  }
});

// Middleware to get a book by ID
async function getBook(req, res, next) {
  let book;
  try {
    book = await Book.findById(req.params.id);
    if (book == null) {
      return res.status(404).json({ message: 'Wrong ID' });
    }
  } catch (err) {
    return res.status(500).json({ message: "Book Not Found" });
  }

  res.book = book;
  next();
}

module.exports = router;
