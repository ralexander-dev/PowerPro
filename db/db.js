const mysql = require('mysql2');
const fs = require('fs');

require('dotenv').config();

function testDB(callback) {
    const config = {
        host:process.env.DB_URL, 
        user:process.env.DB_USER, 
        password:process.env.DB_PASS, 
        database:process.env.DB_NAME, 
        port:3306, 
        ssl:{ca:process.env.DB_CERT}
      };
    
    const conn = new mysql.createConnection(config);
    conn.connect(
        function (err) {
            if (err) {
                console.log("!!! Cannot connect !!! Error:");
                callback(err);
                throw err;
            }
            else {
                console.log("Connection established.");
                readData(callback);
            }
        });

        function readData(callback){
            conn.query('SELECT * FROM user',
                function (err, results, fields) {
                    if (err) {
                        callback(err);
                        throw err;
                    }   
                    else {
                        console.log('Selected ' + results.length + ' row(s).');
                    }
                    for (i = 0; i < results.length; i++) {
                        console.log('Row: ' + JSON.stringify(results[i]));
                    }
                    console.log('Done.');
                    callback(results);
                })
            conn.end(
                function (err) {
                    if (err) throw err;
                    else  console.log('Closing connection.')
            });
        };
};

module.exports = testDB;