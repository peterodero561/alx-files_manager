// Import dependencies
const express = require('express');
const AppController = require('../controllers/AppController');
const UsersController = require('../controllers/UsersController');

// Create a router
const router = express.Router();

// Define routes
router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// routes for creating users
router.post('/users', UsersController.postNew);

// Export the router
module.exports = router;
