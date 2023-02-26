const con = require('../sqlConnect').con;

exports.getProducts = function(req, res) {
    let isDeleted = 0;

    if (req.query.deleted) {
        isDeleted = 1;
    }

    con.query("SELECT * FROM `products` WHERE `isDeleted` = ?", [isDeleted], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}

exports.getCartProducts = function(req, res) {
    con.query("SELECT * FROM `products` WHERE `isDeleted` = 0 AND `id` IN (?)", [req.body.cart], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}

exports.getProduct = function(req, res) {
    con.query("SELECT * FROM `products` WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        if (result.length) {
            res.send(result[0]);
        } else {
            res.send();
        }
    });
}

exports.addProduct = function(req, res) {
    con.query("INSERT INTO `products`(`name`, `price`, `discount`) VALUES (?, ?, ?)", [req.body.name, req.body.price, req.body.discount], (err, result) => {
        if (err) {
            console.log(err);
        }
    
        con.query("SELECT * FROM `products` WHERE `id` = ?", [result.insertId], (err, result) => {
            if (err) {
                console.log(err);
            }
            
            res.send(result[0]);
        });
    });
}

exports.updateProduct = function(req, res) {
    con.query("UPDATE `products` SET `name` = ?, `price` = ?, `discount` = ? WHERE `id` = ?", [req.body.name, req.body.price, req.body.discount, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

exports.restoreProduct = function(req, res) {
    con.query("UPDATE `products` SET `isDeleted` = 0 WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

exports.removeProduct = function(req, res) {
    con.query("UPDATE `products` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}