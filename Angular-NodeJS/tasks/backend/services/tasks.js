import { con } from "../sqlConnect";

export function getTasks(req, res) {
    let isDeleted = 0;

    if (req.query.deleted) {
        isDeleted = 1;
    }

    con.query("SELECT * FROM `tasks` WHERE `isDeleted` = ? AND `userId` = ?", [isDeleted, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}

export function getCounterTasks(req, res) {
    con.query("SELECT `status`, COUNT(`id`) AS 'count' FROM `tasks` WHERE `userId` = ? AND `isDeleted` = 0 GROUP BY `status`", [req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}

export function getTask(req, res) {
    con.query("SELECT * FROM `tasks` WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
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

export function addTask(req, res) {
    con.query("INSERT INTO `tasks`(`task`, `status`, `userId`) VALUES (?, 0, ?)", [req.body.task, req.session.user.id], (err, result) => {
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

export function updateTask(req, res) {
    con.query("UPDATE `tasks` SET `task` = ?, `status` = ?, `level` = ?, `remark` = ? WHERE `id` = ? AND `userId` = ?", [req.body.task, req.body.status, req.body.level, req.body.remark, req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

export function changeTaskStatus(req, res) {
    con.query("UPDATE `tasks` SET `status` = ? WHERE `id` = ? AND `userId` = ?", [req.params.newStatus, req.params.taskId, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

export function changeTaskLevel(req, res) {
    con.query("UPDATE `tasks` SET `level` = ? WHERE `id` = ? AND `userId` = ?", [req.params.newLevel, req.params.taskId, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

export function restoreTask(req, res) {
    con.query("UPDATE `tasks` SET `isDeleted` = 0 WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

export function removeTask(req, res) {
    con.query("UPDATE `tasks` SET `isDeleted` = 1 WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}