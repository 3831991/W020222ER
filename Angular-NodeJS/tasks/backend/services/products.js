import { con } from "../sqlConnect";

export function getProducts(req, res) {
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

export function getProduct(req, res) {
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

export function addProduct(req, res) {
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

export function updateProduct(req, res) {
    con.query("UPDATE `products` SET `name` = ?, `price` = ?, `discount` = ? WHERE `id` = ?", [req.body.name, req.body.price, req.body.discount, req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

export function restoreProduct(req, res) {
    con.query("UPDATE `products` SET `isDeleted` = 0 WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

export function removeProduct(req, res) {
    con.query("UPDATE `products` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}