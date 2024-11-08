/***********************************************************************************************************************************
 File: login.js
 Author(s): Russell Alexander
 Description: 
  This file contains utilities for validating inputs for user login.
 Date Created: 2024-10-17
 Last Modified: 2024-10-18
***********************************************************************************************************************************/

/* Imports */
const { createConnection } = require('../db/db'); 
const bcrypt = require('bcryptjs'); // import bcrypt for password hashing

/* Function for validating username/password combination on login */
function passwordMatch(username, password) {
  return new Promise((resolve, reject) => {
    const conn = createConnection();
    const query = 'SELECT * FROM user WHERE username = ?';
    conn.query(query, [username], function(err, results) {
      if(err) {
        console.log(err);
        reject(err);
      }
      if(results.length > 0) {
        let hashedPassword = results[0].password;
        // ! Note: synchronous bcrypt comparison is not recommended as it blocks main event loop
        let passwordMatch = bcrypt.compareSync(password, hashedPassword);
        if(passwordMatch) {
          console.log('Password matches.');
          resolve(true);
        } else {
          console.log('Password does not match');
          resolve(false);
        }
      } else {
        console.log('Username does not exist.');
        resolve(false);
      }
    });
  });
}

module.exports = { passwordMatch };