const con = require('../sqlConnect').con;

exports.signup = function(req, res) {
    const sqlQuery = "INSERT INTO `users`(`createdTime`, `fullName`, `email`, `userName`, `password`) VALUES (CURRENT_TIME, ?, ?, ?, MD5(?))";
    const paramArr = [req.body.fullName, req.body.email, req.body.userName.trim(), req.body.password.trim()];

    con.query(sqlQuery, paramArr, (err, result) => {
        if (err) {
            throw err;
        }

        con.query("SELECT `id`, `createdTime`, `fullName`, `email`, `userName` FROM `users` WHERE `id` = ?", [result.insertId], (err, result) => {
            if (err) {
                throw err;
            }
    
            res.send(result[0]);
        });
    });
}