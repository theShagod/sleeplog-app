const mysql = require('mysql');

if (process.env.JAWSDB_URL){
    var connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: 'newpassword',
        database: 'acme'
    })
}


connection.connect();


module.exports = connection;