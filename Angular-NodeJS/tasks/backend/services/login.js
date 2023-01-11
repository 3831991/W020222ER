import { con } from '../sqlConnect';

export function login(req, res) {
    const sqlQuery = "SELECT * FROM `users` WHERE `userName`=? AND `password`=MD5(?)";
    const paramArr = [req.body.userName, req.body.password];

    con.query(sqlQuery, paramArr, (err, result) => {
        if (err) {
            throw err;
        }

        if (!result.length) {
            res.send({
                status: 'error',
            });
        }

        res.send({
            status: 'success',
            user: result[0],
        });
    });
}