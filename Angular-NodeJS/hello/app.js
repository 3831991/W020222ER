const express = require('express');
require('./sqlConnect');

const app = express();

app.listen(3000, () => {
    console.log('app listening on port 3000');
});

app.get('/', (req, res) => {
    res.send({
        message: 'Hello World!'
    });
});

const clients = require("./handlers/clients");
app.get("/clients", clients.getClients);