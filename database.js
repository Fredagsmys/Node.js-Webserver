var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'fredagsmys', //
  password: '123', //
  database: 'turbo_bathroom_db',
})
connection.connect((err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Database connected')
})
module.exports = connection