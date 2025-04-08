const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your actual MySQL details
require('dotenv').config(); // Add at the top of your file

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});


// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to DB:', err);
  } else {
    console.log('Connected to MySQL!');
  }
});

// Sample GET API
app.get('/users', (req, res) => {
  db.query('SELECT * FROM msemployee', (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(result);
    }
  });
});

// Sample POST API
//app.post('/users', (req, res) => {
  //const { name, email } = req.body;
  //db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    //if (err) {
      //res.status(500).send(err);
   // } else {
     // res.send({ message: 'User added successfully', id: result.insertId });
    //}
  //});
//});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
