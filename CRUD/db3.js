var mysql = require('mysql');
// Establish a connection to the MySQL server, specifying the database 'empDB1'
var con = mysql.createConnection({
host: 'localhost', user: 'root', password: '', database: 'empDB1' });
// Connect to the MySQL server using the established connection object
con.connect(function(err) {
if (err) {
// Handle any errors that occur during connection
throw err;
}
console.log('Connected to MySQL database');
// Define the SQL query to select all records from the 'empinfo' table
var sql1 = 'SELECT * FROM empinfo';
// Execute the SQL query using the connection object
con.query(sql1, function(err, result) {
if (err) {
// Handle any errors that occur during query execution
throw err;
}
console.log('Employee Data:');
console.table(result);
});
});