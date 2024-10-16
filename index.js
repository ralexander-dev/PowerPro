/*
 File: index.js
 Author(s): Russell Alexander
 Description: 
  This file is the entry point for the application. It sets up the express server and defines the routes.
 Date Created: 2024-09-26
 Last Modified: 2024-10-16
*/

// !!! development variable to switch between database and JSON file
const IS_DEV = true;

// imports
const express = require('express');
const path = require('path');
const authController = require('./controllers/auth.js');
const { getUsers, getProducts, getPurchases } = IS_DEV ? require('./db/dev_db') : require('./db/db');

/* Express app configuration */
const app = express(); // create express app instance
app.use(express.static(path.join(__dirname, 'public'))); // set the public folder as root directory for static files
app.use(express.urlencoded({extended: false})); // Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json()); // Parse JSON bodies (as sent by clients)
app.set('view engine', 'hbs'); // set the view engine to HBS
/* End Express app configuration */

/* Route definitions */
// static GET routes
app.get('/', (req, res) => { res.render('index'); }); // home route -- renders index.hbs
app.get('/signup', (req, res) => { res.render('signup'); }); // signup route -- renders signup.hbs
app.get('/about', (req, res) => { res.render('about'); }); // about route -- renders about.hbs
app.get('/contact', (req, res) => { res.render('contact'); }); // contact route -- renders contact.hbs
app.get('/shipping', (req, res) => { res.render('shipping'); }); // shipping route -- renders shipping.hbs
app.get('/menTops', (req, res) => { res.render('men-tops'); }); // menTops route -- renders men-tops.hbs
app.get('/menBottoms', (req, res) => { res.render('men-bottoms'); }); // menBottoms route -- renders men-bottoms.hbs
app.get('/menShoes', (req, res) => { res.render('men-shoes'); }); // menShoes route -- renders men-shoes.hbs
// signup POST route -- handles form submission
app.post('/signup', authController.register);


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
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });