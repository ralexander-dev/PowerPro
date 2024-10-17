/***********************************************************************************************************************************
 File: login.js
 Author(s): Russell Alexander
 Description: 
  This file contains utilities for validating inputs for user login.
 Date Created: 2024-10-17
 Last Modified: 2024-10-17
***********************************************************************************************************************************/

/* Imports */
require('dotenv').config(); // load environment variables
const IS_DEV = (process.env.IS_DEV === 'TRUE') ? true : false; // !!! development variable to switch between database and JSON file
const { checkForUser, checkPassword } = IS_DEV ? require('../db/dev_db') : require('../db/db'); 

/* Function for validating usernames on login input */
function validateUsername(username, password) {
    // call checkForUser function to see if username already exists
    checkForUser(username, (data) => {
      let usernameMsg = 'Username exists.';
      // if username exists, return 'true'
      if (data.length > 0) {
        console.log(usernameMsg);
        return passwordMatch(username, password);
      } 
      // if username does not exist, check if in development mode or production mode
      else {
        // in develpment mode
        if (IS_DEV === true) {
          console.log('Using JSON DB, not checking for existing user.');
          return false;
        } 
        // in production mode
        else {
          console.log('Username does not exist.');
          return false;
        //todo -- Add new user to database
        }
      }
    });
}

function passwordMatch(username, password) {
    checkPassword(username, password, (data) => {
        // if password matches, return 'true'
        if (data.length > 0) {
            console.log('Password matches.');
            return true;
        } else {
            console.log('No match found.');
            return false;
        }
    });
}

module.exports = { validateUsername };