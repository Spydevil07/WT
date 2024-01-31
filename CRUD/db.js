var mysql = require('mysql');
var con = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '', 
});
con.connect(function(err) {
if (err) {
throw err;
}
console.log('Connected to MySQL database');
var sql1 = 'CREATE DATABASE empDB1';
con.query(sql1, function(err, result) {
if (err) {
throw err;
}
console.log('Database created successfully');
});
});