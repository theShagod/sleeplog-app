const mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'newpassword',
    database: 'acme'
})

connection.connect();


module.exports = connection;