const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Replace with your actual MySQL details
const db = mysql.createConnection({
  host: 'srv840.hstgr.io',        // e.g., your-db-host.com
  port: 3306,   
  user: 'u567123576_psirisha',             // your DB user
  password: 'PnSiri@123', // your DB password
  database: 'u567123576_testc1'        // your DB name
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
