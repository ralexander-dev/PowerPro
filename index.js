/*
 File: index.js
 Author(s): Russell Alexander
 Description: 
  This file is the entry point for the application. It sets up the express server and defines the routes.
 Date Created: 2024-09-26
 Last Modified: 2024-10-01
*/

// imports
const express = require('express');
const path = require('path');
const { getUsers, getProducts, getPurchases } = require('./db/db');

/* Express app configuration */
// create express app instance
const app = express();
app.use(express.static(path.join(__dirname, 'public'))); // set the public folder as root directory for static files
/* End Express app configuration */

/* Route definitions */
// static routes
// home route -- serves the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

// data routes
// users route -- serves users table from the database as JSON
app.get('/users', (req, res) => {
  getUsers((data) => {
    res.json(data); 
  });
});

app.get('/products', (req, res) => {
  getProducts((data) => {
    res.json(data); 
  });
});

app.get('/purchases', (req, res) => {
  getPurchases((data) => {
    res.json(data); 
  });
});
/* End route definitions */

// server startup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
