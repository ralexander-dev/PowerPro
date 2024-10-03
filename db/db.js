const mysql = require('mysql2');
const fs = require('fs');
require('dotenv').config();

function getData(callback) {
    config = {
        host: process.env.DB_URL, 
        user: process.env.DB_USER, 
        password: process.env.DB_PASS, 
        database: process.env.DB_NAME, 
        port: 3306, 
        ssl: { ca: process.env.DB_CERT }
    }
    const conn = new mysql.createConnection(config);
  
    conn.connect(function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            callback(err);
            throw err;
        } else {
            console.log("Connection established.");
            readData(callback);
        }
    });

    function readData(callback) {
        const queries = {
            users: 'SELECT * FROM user',
            products: 'SELECT * FROM product',
            orders: 'SELECT * FROM `order`'
        };

        const results = {};

        // Execute users query
        conn.query(queries.users, function (err, usersResults) {
            if (err) {
                callback(err);
                throw err;
            }
            results.users = usersResults;

            // Execute products query after users query
            conn.query(queries.products, function (err, productsResults) {
                if (err) {
                    callback(err);
                    throw err;
                }
                results.products = productsResults;

                // Execute orders query after products query
                conn.query(queries.orders, function (err, ordersResults) {
                    if (err) {
                        callback(err);
                        throw err;
                    }
                    results.orders = ordersResults;

                    // All queries done, return the result
                    console.log('Data retrieval complete.');
                    callback(results);

                    // Close the connection
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
