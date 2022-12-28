const con = require('../sqlConnect').con;

function getContact(req, res) {
    con.query("SELECT * FROM `new_contact`", (err, result) => {
        if (err) {
            throw err;
        }

        res.send(result);
    });
}

function addContact(req, res) {  
    con.query("INSERT INTO `new_contact`(`fullName`, `email`, `phone`, `content`) VALUES (?,?,?,?)", [req.body.fullName, req.body.email, req.body.phone, req.body.content], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}

function removeContact(req, res) {
    con.query("DELETE FROM `new_contact` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }

        res.send();
    });
}

exports.getContact = getContact;
exports.addContact = addContact;
exports.removeContact = removeContact;