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

    console.log("آيوا أليك");
});

// מאפשר גישה למשתנה לדפים אחרים המייבאים את הדף הזה
exports.con = con;