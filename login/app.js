const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'login'
});

// Middleware for parsing JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS)
app.use(express.static('public'));

// Set up a simple login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  // Check the database for the username and password
  pool.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
    if (error) {
      return res.status(500).json({ message: 'Internal Server Error.' });
    }

    if (results.length > 0) {
      // User is authenticated
      res.status(200).json({ message: 'Login successful!' });
    } else {
      // User authentication failed
      res.status(401).json({ message: 'Invalid username or password.' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
