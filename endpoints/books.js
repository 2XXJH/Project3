const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// Define the routes for books
router.post('/', booksController.createBook);
router.get('/', booksController.getAllBooks);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);

module.exports = router;
