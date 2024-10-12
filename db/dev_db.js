/*
 File: dev_db.js
 Author(s): Russell Alexander
 Description: 
  This file is contains functions for interacting with the database schema IN DEVELOPMENT ONLY.
    ! Note: This file is used for development purposes only. It reads data from a JSON file instead of a database.
 Date Created: 2024-10-12
 Last Modified: 2024-10-12
*/

// imports
const fs = require('fs');
require('dotenv').config();

const jsonFilePath = './db/sampleData.json'; // Path to the JSON file

// Function to read the JSON file
function loadJSON() {
    try {
        console.log('Reading data from JSON...');
        const data = fs.readFileSync(jsonFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.log('Error reading JSON:', err);
        throw err;
    }
}

// Function to retrieve users from the JSON file
function getUsers(callback) {
    const data = loadJSON();
    const users = data.user;
    
    if (users) {
        console.log('User data retrieved.');
        callback(users);
    } else {
        callback(new Error('Unable to retrieve user data from the JSON file.'));
    }
}

// Function to retrieve products from the JSON file
function getProducts(callback) {
    const data = loadJSON();
    const products = data.product;

    if (products) {
        console.log('Product data retrieved.');
        callback(products);
    } else {
        callback(new Error('Unable to retrieve product data from the JSON file.'));
    }
}

// Function to retrieve purchases from the JSON file
function getPurchases(callback) {
    const data = loadJSON();
    const purchases = data.purchase;

    if (purchases) {
        console.log('Purchase data retrieved.');
        callback(purchases);
    } else {
        callback(new Error('Unable to retrieve purchase data from the JSON file.'));
    }
}

module.exports = { getUsers, getProducts, getPurchases };
