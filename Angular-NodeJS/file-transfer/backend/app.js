const express = require("express");
const cors = require('cors');
const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const app = express();

app.use(cors({
    origin: true,
    credentials: true,
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
}));

app.listen(770);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/gallery/upload', (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        // זה השם שננו לקובץ ב-HTML
        const myFile = files.myFile;

        const oldPath = myFile.filepath;
        const newPath = `./images/${myFile.originalFilename}`;

        fs.copyFile(oldPath, newPath, (err) => {
            if (err) {
                console.log(err);
            }
            
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(`<meta charset="UTF-8">`);
            res.write(`<h1>התמונה עלתה בהצלחה</h1>`);
            res.write(`<img src="http://localhost:770/gallery/image/${myFile.originalFilename}" width="500">`);

            res.end();
        });
    });
});

app.get('/gallery/image/:imageName', (req, res) => {
    // __dirname = מביא את הניתוב של התיקייה שבה נמצא הקובץ הנוכחי
    res.sendFile(path.resolve(`${__dirname}/images/${req.params.imageName}`));
});