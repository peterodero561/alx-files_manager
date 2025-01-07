// Import dependencies
const express = require('express');
const routes = require('./routes/index');

// Create an Express application
const app = express();

// Set the port
const PORT = process.env.PORT || 5000;

// Load all routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
