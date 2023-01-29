import express from 'express';
import cors from 'cors';
import './sqlConnect';
import { signup } from './services/signup';
import { getLoginStatus, login, logout } from './services/login';
import { addTask, changeTaskLevel, changeTaskStatus, getTasks, removeTask, restoreTask } from './services/tasks';
const session = require('express-session');

const app = express();

// const unGuards = [
//     '/login',
//     '/logout',
//     '/signup',
// ];

app.use(session({
    secret: 'my-secret',
    name: 'mySession',
    resave: false,
    saveUninitialized: false,
}));

app.use(cors({
    origin: true,
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json());

// // פונקצית ביניים הבודקת את ההרשאות באופן גורף - לפני שהיא ניגשת בכלל לפונקציות
// app.use((req, res, next) => {
//     if (unGuards.includes(req.url) || req.session.user) {
//         next();
//     } else {
//         res.sendStatus(401);
//     }
// });

app.listen(3000, () => {
    console.log('listening on 3000');
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users/:userId', (req, res) => {
    res.send({
        params: req.params,
        query: req.query,
    });
});

function authGurd(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.sendStatus(401);
    }
}

app.get('/login', getLoginStatus);
app.get('/logout', logout);
app.post('/signup', signup);
app.post('/login', login);

app.get('/tasks', authGurd, getTasks);
app.post('/tasks', authGurd, addTask);
app.put('/tasks/:taskId/status/:newStatus', authGurd, changeTaskStatus);
app.put('/tasks/:taskId/level/:newLevel', authGurd, changeTaskLevel);
app.put('/tasks/restore/:id', authGurd, restoreTask);
app.delete('/tasks/:id', authGurd, removeTask);
