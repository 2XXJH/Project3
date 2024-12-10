const Book = require('../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
  const { title, author, genre } = req.body;

  try {
    const book = new Book({ title, author, genre });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error creating book' });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books' });
  }
};

// Update a book
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(id, { title, author, genre }, { new: true });
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error updating book' });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    await Book.findByIdAndDelete(id);
    res.status(200).json({ message: 'Book deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting book' });
  }
};
