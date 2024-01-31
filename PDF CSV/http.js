const http = require('http');
const fs = require('fs');
const path = require('path');

// Create a server
const server = http.createServer((req, res) => {
  // Get the requested file path
  const filePath = path.join(__dirname, req.url);

  // Set the default content type
  let contentType = 'text/html';

  // Determine the content type based on the file extension
  const extname = path.extname(filePath);
  switch (extname) {
    case '.pdf':
      contentType = 'application/pdf';
      break;
    case '.csv':
      contentType = 'text/csv';
      break;
    default:
      contentType = 'text/html';
  }

  // Read the requested file
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // If the file is not found, return a 404 error
      if (err.code === 'ENOENT') {
        res.writeHead(404);
        res.end('File not found');
      } else {
        // If there is an error, return a 500 error
        res.writeHead(500);
        res.end('Server error');
      }
    } else {
      // Set the content type and send the file data
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server started on port 3000');
});