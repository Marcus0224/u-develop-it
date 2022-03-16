const mysql = require('mysql2');

const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

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

// Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
//   });

//get a sinlge candidate

// db.query('select * from candidates where id = 1', (err, row) => {
//     if (err) {
//         console.log(err);
//     } console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(result);
//   });
// Create a candidate
// const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
//               VALUES (?,?,?,?)`;
// const params = [8, 'Montague', 'Summers', 1];

// db.query(sql, params, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});