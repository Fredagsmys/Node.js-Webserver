var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "fredagmys",
  password: "123",
  database: "arduinodb",
  port: '/var/run/mysqld/mysqld.sock'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});