/***********************************************************************************************************************************
 File: auth.js
 Author(s): Russell Alexander
 Description: 
  This file handles authentication for login and registering users.
 Date Created: 2024-10-15
 Last Modified: 2024-10-19
***********************************************************************************************************************************/

/* Imports */
require('dotenv').config(); // load environment variables
const IS_DEV = (process.env.IS_DEV === 'TRUE') ? true : false; // !!! development variable to switch between database and JSON file
const jwt = require('jsonwebtoken'); // import jsonwebtoken for user authentication
const bcrypt = require('bcryptjs'); // import bcrypt for password hashing

/* Functionality for registering new users */
exports.register = async (req, res) => {
  const { validateUsername, validatePassword, registerUser } = require('./register'); // import input validations from register.js
  const { username, password, passwordConfirm, firstname, lastname, streetAddress, cityAddress, stateAddress, zipAddress } = req.body; // extract user input from form
  
  // if in development mode, skip registration and render index page
  if (IS_DEV) {
    console.log('Development mode: Skipping registration.');
    res.render('index');
  }
  // otherwise, validate user input and render index page if successful 
  else {
    try {
      const isValidUsername = await validateUsername(username); // check if username is unique
      const isPasswordMatch = validatePassword(password, passwordConfirm); // check if passwords match
      let usernameError, passwordError; // error message strings
  
      // if username is unique and passwords match, render index page
      if (isValidUsername && isPasswordMatch) {
        let hashedPassword = await bcrypt.hash(password, 8); // hash password
        await registerUser(username, hashedPassword, firstname, lastname, streetAddress, cityAddress, stateAddress, zipAddress); // register user
        res.render('index');
      }
      // otherwise, render signup page with necessary alerts 
      else {
        if (!isValidUsername) usernameError = 'Username already exists.';
        if (!isPasswordMatch) passwordError = 'Passwords do not match.';
        res.render('signup', { usernameError: usernameError, passwordError: passwordError });
      }
    } catch (error) {
      console.error(error);
      res.render('signup', { errorMessage: 'An error occurred. Please try again.' });
    }
  }
}

/* Functionality for logging in users */
exports.login = async (req, res) => {
  const { passwordMatch } = require('./login'); // import input validations from login.js
  const { username, password } = req.body; // extract user input from form

  // if in development mode, skip login and render index page
  if (IS_DEV) {
    console.log('Development mode: Skipping login.');
    const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' }); // create token with username
    console.log('Token:', token);
    res.cookie('token', token, {
      httpOnly: true,
      secure: (!IS_DEV),
      maxAge: 3600000, // 1 hour
    });
    res.render('index');
  }
  // otherwise, validate user input and render index page if successful 
  else {
    try {
      const isPasswordMatch = await passwordMatch(username, password); // check if password matches username
  
      // if username exists and password matches, render index page
      if (isPasswordMatch) {
        const token = jwt.sign({ username: username }, process.env.JWT_SECRET, { expiresIn: '1h' }); // create token with username
        res.cookie('token', token, {
          httpOnly: true,
          secure: (!IS_DEV),
          maxAge: 3600000, // 1 hour
        });
        res.render('index');
      }
      // otherwise, render login page with necessary alerts 
      else {
        res.render('login', { errorMessage: 'Invalid username or password.' });
      }
    } catch (error) {
      console.error(error);
      res.render('login', { errorMessage: 'An error occurred. Please try again.' });
    }
  }
}

/* Middleware for authenticating user by checking JWT */
exports.authMiddleware = (req, res, next) => {
  // extract token from cookies
  const token = req.cookies.token;
  // if token does not exist, render login page with alert
  if (!token) {
    return res.render('login', { errorMessage: 'Please log in to continue' });
  }
  // otherwise, verify token and extract
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // if token is invalid, render login page with alert
    if (err) {
      return res.render('login', { errorMessage: 'Invalid Token' });
    }
    // otherwise, set username in request
    req.username = decoded.username;
    next();
  });
}
