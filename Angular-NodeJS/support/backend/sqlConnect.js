const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'full-stack',
});

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("connected to database");
});

exports.con = con;