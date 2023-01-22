import { con } from "../sqlConnect";

export function getTasks(req, res) {
    con.query("SELECT * FROM `tasks` WHERE `isDeleted` = 0", (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}

export function addTask(req, res) {
    con.query("INSERT INTO `tasks`(`task`, `status`) VALUES (?, 0)", [req.body.task], (err, result) => {
        if (err) {
            console.log(err);
        }
    
        con.query("SELECT * FROM `tasks` WHERE `id` = ?", [result.insertId], (err, result) => {
            if (err) {
                console.log(err);
            }
            
            res.send(result[0]);
        });
    });
}

export function changeTaskStatus(req, res) {
    con.query("UPDATE `tasks` SET `status` = ? WHERE `id` = ?", [req.params.newStatus, req.params.taskId], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

export function removeTask(req, res) {
    con.query("UPDATE `tasks` SET `isDeleted` = 1 WHERE `id` = ?", [req.params.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}