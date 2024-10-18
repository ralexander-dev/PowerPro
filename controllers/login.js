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
const { createConnection } = IS_DEV ? require('../db/dev_db') : require('../db/db'); 

/* Function for validating usernames on login input */
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
        resolve(true);
      } else {
        console.log('Username does not exist.');
        resolve(false);
      }
    });
  });
}

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
        console.log("Results: ", results)
        if(results[0].Password === password) {
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

module.exports = { validateUsername, passwordMatch };