const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

// Define the routes for staff
router.post('/', staffController.createStaff);
router.get('/', staffController.getAllStaff);

module.exports = router;
