const express = require('express');
const path = require('path');
const app = express();
const testDB = require('./db/db');

// Set the public folder as root directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/users', (req, res) => {
  testDB((data) => {
      res.json(data);  // Send the data as JSON
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
