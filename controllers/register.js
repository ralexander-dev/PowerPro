/***********************************************************************************************************************************
 File: register.js
 Author(s): Russell Alexander
 Description: 
  This file contains utilities for validating inputs for user registration.
 Date Created: 2024-10-17
 Last Modified: 2024-10-18
***********************************************************************************************************************************/

/* Imports */
const { createConnection } = require('../db/db'); 

/* Function for validating usernames on signup */
function validateUsername(username) {
  return new Promise((resolve, reject) => { 
    const conn = createConnection();
    const query = 'SELECT * FROM user WHERE username = ?';
    conn.query(query, [username], function(err, results) {
      if(err) {
        console.log(err);
        reject(err);
      }
      if(results.length > 0) {
        console.log('Username exists.');
        resolve(false);
      } else {
        console.log('Username does not exist.');
        resolve(true);
      }
    });
  });
}
  
function validatePassword(password, passwordConfirm) {
  if (password !== passwordConfirm) {
    return false;
  } else {
    return true;
  }
};

function registerUser(username, password, firstname, lastname, streetAddress, cityAddress, stateAddress, zipAddress) {
  return new Promise((resolve, reject) => {
    const conn = createConnection();
    const query = 'INSERT INTO user (username, password, first_name, last_name, street, city, state, zip, credits) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    conn.query(query, [username, password, firstname, lastname, streetAddress, cityAddress, stateAddress, zipAddress, 1000.00], function(err, results) {
      if(err) {
        console.log(err);
        reject(err);
      }
      console.log('User registered.');
      resolve(true);
    });
  });
}

module.exports = { validateUsername, validatePassword, registerUser };