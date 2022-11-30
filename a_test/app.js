const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Listen 3000');
});

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/users', (req, res) => {
    res.send([{
            id: 1,
            name: 'Lerner',
        },
        {
            id: 2,
            name: 'Cohen',
        },
    ]);
});