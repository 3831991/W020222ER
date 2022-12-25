const sqlConnect = require('../sqlConnect');
const con = sqlConnect.con;

function getClients(req, res) {
    con.query("SELECT * FROM `clients`", (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    })
}

exports.getClients = getClients;
