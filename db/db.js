/*
 File: db.js
 Author(s): Russell Alexander
 Description: 
  This file is contains functions for interacting with the database.
 Date Created: 2024-09-26
 Last Modified: 2024-10-09
*/

const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

// Database configuration
const config = {
    host: process.env.DB_URL,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 3306,
    //ssl: { ca: process.env.DB_CERT }
};

// Create a reusable connection function
function createConnection() {
    const conn = mysql.createConnection(config);
    conn.connect(function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:", err);
            throw err;
        }
        console.log("Connection established.");
    });
    return conn;
}

// Function to fetch users
function getUsers(callback) {
    const conn = createConnection();
    const query = 'SELECT * FROM user';
    
    conn.query(query, function (err, results) {
        if (err) {
            callback(err);
            throw err;
        }
        console.log('Users data retrieval complete.');
        callback(results);

        conn.end(function (err) {
            if (err) throw err;
            console.log('Closing connection.');
        });
    });
}

// Function to fetch products
function getProducts(callback) {
    const conn = createConnection();
    const query = 'SELECT * FROM product';

    conn.query(query, function (err, results) {
        if (err) {
            callback(err);
            throw err;
        }
        console.log('Products data retrieval complete.');
        callback(results);

        conn.end(function (err) {
            if (err) throw err;
            console.log('Closing connection.');
        });
    });
}

// Function to fetch purchases
function getPurchases(callback) {
    const conn = createConnection();
    const query = 'SELECT * FROM purchase';

    conn.query(query, function (err, results) {
        if (err) {
            callback(err);
            throw err;
        }
        console.log('Purchases data retrieval complete.');
        callback(results);

        conn.end(function (err) {
            if (err) throw err;
            console.log('Closing connection.');
        });
    });
}

module.exports = { getUsers, getProducts, getPurchases };
