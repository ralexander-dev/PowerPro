/***********************************************************************************************************************************
 File: register.js
 Author(s): Russell Alexander
 Description: 
  This file contains utilities for validating inputs for user registration.
 Date Created: 2024-10-17
 Last Modified: 2024-10-17
***********************************************************************************************************************************/

/* Imports */
require('dotenv').config(); // load environment variables
const IS_DEV = (process.env.IS_DEV === 'TRUE') ? true : false; // !!! development variable to switch between database and JSON file
const { checkForUser } = IS_DEV ? require('../db/dev_db') : require('../db/db'); 

/* Function for validating usernames on signup */
function validateUsername(username) {
    // call checkForUser function to see if username already exists
    checkForUser(username, (data) => {
      let usernameError = 'Username already exists.';
      // if username exists, return an error message
      if (data.length > 0) {
        console.log(usernameError);
        return usernameError;
      } 
      // if username does not exist, check if in development mode or production mode
      else {
        // in develpment mode
        if (IS_DEV === true) {
          console.log('Using JSON DB, not checking for existing user.');
          return null;
        } 
        // in production mode
        else {
          console.log('Username does not exist.');
          return null;
        //todo -- Add new user to database
        }
      }
    });
  }
  
  function validatePassword(password, passwordConfirm) {
    let passwordError = 'Passwords do not match.';
    if (password !== passwordConfirm) {
      console.log(passwordError);
      return passwordError;
    } else {
      console.log('Passwords match.');
      return null;
    }
  };

module.exports = { validateUsername, validatePassword };