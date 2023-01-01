const express = require('express');
const cors = require('cors');
require('./sqlConnect');
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

app.use(express.json());

app.listen(3000);

app.get('/', (req, res) => {
    res.send("יופי טופי");
});

const contact = require('./handlers/contact');
app.get('/contact', contact.getContact);
app.post('/contact', contact.addContact);
app.put('/contact/:id/status/complete', contact.complete);
app.put('/contact/:id/status/undo', contact.undo);
app.delete('/contact/:id', contact.removeContact);