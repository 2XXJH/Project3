const express = require('express');
const router = express.Router();
const membersController = require('../controllers/membersController');

// Define the routes for members
router.post('/', membersController.createMember);
router.get('/', membersController.getAllMembers);

module.exports = router;
