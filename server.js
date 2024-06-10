// server.js
const express = require('express');
const mysql = require('mysql');

// Create an Express app
const app = express();

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'nichlo'
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

// Create an API endpoint to handle registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Validate input data (not shown for brevity)

  // Insert data into the "client" table
  const query = `INSERT INTO client (username, email, password) VALUES (?,?,?)`;
  db.query(query, [username, email, password], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send({ message: 'Error registering user' });
    } else {
      res.send({ message: 'User registered successfully' });
    }
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});