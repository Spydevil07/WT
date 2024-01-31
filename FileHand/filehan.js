const fs = require('fs');

// Create a file
fs.writeFile('example.txt', 'Hello, this is a sample file!', 'utf8', (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('File created successfully.');

  // Write to a file
  fs.appendFile('example.txt', '\nAdditional content added asynchronously.', 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Content added to file successfully.');

    // Read from a file
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('File content:', data);

      // Delete the file
      fs.unlink('example.txt', (err) => {
        if (err) {
          console.error('Error deleting file:', err);
          return;
        }
        console.log('File deleted successfully.');
      });
    });
  });
});
