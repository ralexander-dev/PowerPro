/***********************************************************************************************************************************
 File: auth.js
 Author(s): Russell Alexander
 Description: 
  This file handles authentication for login and registering users.
 Date Created: 2024-10-xx
 Last Modified: 2024-10-17
***********************************************************************************************************************************/

/* Imports */
require('dotenv').config(); // load environment variables
const IS_DEV = (process.env.IS_DEV === 'TRUE') ? true : false; // !!! development variable to switch between database and JSON file

/* Functionality for registering new users */
exports.register = async (req, res) => {
  const { validateUsername, validatePassword } = require('./register'); // import input validations from register.js
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
  const { validateUsername, passwordMatch } = require('./login'); // import input validations from login.js
  const { username, password } = req.body; // extract user input from form

  // if in development mode, skip login and render index page
  if (IS_DEV) {
    console.log('Development mode: Skipping login.');
    res.render('index');
  }
  // otherwise, validate user input and render index page if successful 
  else {
    try {
      const isValidUsername = await validateUsername(username); // check if username exists
      const isPasswordMatch = await passwordMatch(username, password); // check if password matches username
  
      // if username exists and password matches, render index page
      if (isValidUsername && isPasswordMatch) {
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