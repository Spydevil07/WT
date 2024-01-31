// Import the http module
const http = require('http');

// Import the fs module
const fs = require('fs');

// Import the path module
const path = require('path');

// Print information about the http module
console.log('http module:');
console.log('  Description:', http.httpVersion);
console.log('  Version:', http.version);
console.log('  Headers:', http.get('https://www.google.com').headers);

// Print information about the fs module
console.log('');
console.log('fs module:');
console.log('  Description:', fs.version);
console.log('  Methods:', Object.keys(fs));
console.log('  Example:', fs.readFileSync('package.json', 'utf8'));

// Print information about the path module
console.log('');
console.log('path module:');
console.log('  Description:', path.version);
console.log('  Methods:', Object.keys(path));
console.log('  Example:', path.resolve('node_modules', 'express', 'package.json'));