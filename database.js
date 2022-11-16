var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'localhost:3306', // Replace with your host name
  user: 'fredagsmys',      // Replace with your database username
  password: '123',      // Replace with your database password
  database: 'turbo_bathroom_db' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;