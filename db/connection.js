const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MYSQL username,
        user: 'root',
        // your MYSQL password
        password: 'Samantha27!',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db;