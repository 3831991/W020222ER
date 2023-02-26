const con = require('../sqlConnect').con;

exports.getTasks = function(req, res) {
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

exports.getCounterTasks = function(req, res) {
    con.query("SELECT `status`, COUNT(`id`) AS 'count' FROM `tasks` WHERE `userId` = ? AND `isDeleted` = 0 GROUP BY `status`", [req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send(result);
    });
}

exports.getTask = function(req, res) {
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

exports.addTask = function(req, res) {
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

exports.updateTask = function(req, res) {
    con.query("UPDATE `tasks` SET `task` = ?, `status` = ?, `level` = ?, `remark` = ? WHERE `id` = ? AND `userId` = ?", [req.body.task, req.body.status, req.body.level, req.body.remark, req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

exports.changeTaskStatus = function(req, res) {
    con.query("UPDATE `tasks` SET `status` = ? WHERE `id` = ? AND `userId` = ?", [req.params.newStatus, req.params.taskId, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

exports.changeTaskLevel = function(req, res) {
    con.query("UPDATE `tasks` SET `level` = ? WHERE `id` = ? AND `userId` = ?", [req.params.newLevel, req.params.taskId, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

exports.restoreTask = function(req, res) {
    con.query("UPDATE `tasks` SET `isDeleted` = 0 WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}

exports.removeTask = function(req, res) {
    con.query("UPDATE `tasks` SET `isDeleted` = 1 WHERE `id` = ? AND `userId` = ?", [req.params.id, req.session.user.id], (err, result) => {
        if (err) {
            console.log(err);
        }

        res.send();
    });
}