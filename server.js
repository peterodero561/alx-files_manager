// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

// Create an Express application
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Load all routes
app.use('/', routes);

// Set the port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
