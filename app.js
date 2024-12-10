const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const booksRoutes = require('./endpoints/books');
const membersRoutes = require('./endpoints/members');
const staffRoutes = require('./endpoints/staff');

// Initialize dotenv for environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/books', booksRoutes);
app.use('/api/members', membersRoutes);
app.use('/api/staff', staffRoutes);

module.exports = app;
dotenv.config();  
