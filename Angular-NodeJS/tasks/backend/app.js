const express = require('express');
const cors = require('cors');
require('./sqlConnect');
const signup = require('./services/signup');
const login = require('./services/login');
const tasks = require('./services/tasks');
const products = require('./services/products');
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

// app.use((req, res, next) => {
//     console.log(req.method);
//     console.log(req.url);
//     setTimeout(next, 1000);
// });

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

app.get('/login', login.getLoginStatus);
app.get('/logout', login.logout);
app.post('/signup', signup.signup);
app.post('/login', login.login);

app.get('/tasks', authGurd, tasks.getTasks);
app.get('/tasks/counter', authGurd, tasks.getCounterTasks);
app.get('/task/:id', authGurd, tasks.getTask);
app.post('/tasks', authGurd, tasks.addTask);
app.put('/tasks/:id', authGurd, tasks.updateTask);
app.put('/tasks/:taskId/status/:newStatus', authGurd, tasks.changeTaskStatus);
app.put('/tasks/:taskId/level/:newLevel', authGurd, tasks.changeTaskLevel);
app.put('/tasks/restore/:id', authGurd, tasks.restoreTask);
app.delete('/tasks/:id', authGurd, tasks.removeTask);

app.get('/products', authGurd, products.getProducts);
app.post('/products/cart', authGurd, products.getCartProducts);
app.get('/product/:id', authGurd, products.getProduct);
app.post('/products', authGurd, products.addProduct);
app.put('/products/:id', authGurd, products.updateProduct);
app.put('/products/restore/:id', authGurd, products.restoreProduct);
app.delete('/products/:id', authGurd, products.removeProduct);
