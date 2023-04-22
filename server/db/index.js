const mysql = require('mysql2');  /// ---- This isnt in our dependencies... ASSUMING we need to add it

// create a db connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'movieList'
});
// call the connection to actually connect
connection.connect();


// export the connection
module.exports = connection;