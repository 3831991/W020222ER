import express from 'express';
import cors from 'cors';
import './sqlConnect';
import { signup } from './services/signup';
import { getLoginStatus, login, logout } from './services/login';
import { addTask, changeTaskLevel, changeTaskStatus, getTasks, removeTask, restoreTask } from './services/tasks';
const session = require('express-session');

const app = express();

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

app.get('/login', getLoginStatus);
app.get('/logout', logout);
app.post('/signup', signup);
app.post('/login', login);

app.get('/tasks', getTasks);
app.post('/tasks', addTask);
app.put('/tasks/:taskId/status/:newStatus', changeTaskStatus);
app.put('/tasks/:taskId/level/:newLevel', changeTaskLevel);
app.put('/tasks/restore/:id', restoreTask);
app.delete('/tasks/:id', removeTask);
