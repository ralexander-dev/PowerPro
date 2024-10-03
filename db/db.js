/*
 File: db.js
 Author(s): Russell Alexander
 Description: 
  This file is contains functions for interacting with the database.
 Date Created: 2024-09-26
 Last Modified: 2024-10-03
*/

// imports
const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

// this function retrieves data from the database and calls the callback function with the results
function getData(callback) {
    // database connection strings
    config = {
        host: process.env.DB_URL, 
        user: process.env.DB_USER, 
        password: process.env.DB_PASS, 
        database: process.env.DB_NAME, 
        port: 3306, 
        ssl: { ca: process.env.DB_CERT }
    }
    // create a new connections to the database
    const conn = new mysql.createConnection(config);
  
    // attempt to connect to the database
    conn.connect(function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            callback(err);
            throw err;
        } else {
            console.log("Connection established.");
            readData(callback); // exectute data retrieval
        }
    });

    // readData function to execute queries and return data through callback
    function readData(callback) {
        // queries to execute
        const queries = {
            users: 'SELECT * FROM user',
            products: 'SELECT * FROM product',
            orders: 'SELECT * FROM `order`'
        };
        const results = {}; // variable to store data returned from queries.

        // Execute users query
        conn.query(queries.users, function (err, usersResults) {
            if (err) {
                callback(err);
                throw err;
            }
            results.users = usersResults; // store users query results in results object

            // Execute products query
            conn.query(queries.products, function (err, productsResults) {
                if (err) {
                    callback(err);
                    throw err;
                }
                results.products = productsResults; // store products query results in results object

                // Execute orders query
                conn.query(queries.orders, function (err, ordersResults) {
                    if (err) {
                        callback(err);
                        throw err;
                    }
                    results.orders = ordersResults; // store orders query results in results object

                    console.log('Data retrieval complete.');
                    callback(results); // call the callback function with query results

                    // close the connection
                    conn.end(function (err) {
                        if (err) throw err;
                        console.log('Closing connection.');
                    });
                });
            });
        });
    }
}

module.exports = getData;
