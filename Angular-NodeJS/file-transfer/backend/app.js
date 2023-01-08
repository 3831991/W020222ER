const express = require("express");
const cors = require('cors');
const formidable = require('formidable');
const fs = require('fs');
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

        // הנתיב הזמני שבו נמצא כרגע הקובץ שהועלה זה עתה
        const oldPath = myFile.filepath;
        // היעד שבו אנו שומרים את הקובץ
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

app.post('/gallery/upload/multi', (req, res) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {

        for (const key in files) {
            const file = files[key];
            const oldPath = file.filepath;
            const newPath = `./images/${file.originalFilename}`;
    
            fs.copyFile(oldPath, newPath, (err) => {
                if (err) {
                    console.log(err);
                }
                
            });

            res.send();
        }
    });
});

app.get('/gallery/image/:imageName', (req, res) => {
    // __dirname = מביא את הניתוב של התיקייה שבה נמצא הקובץ הנוכחי
    res.sendFile(`${__dirname}/images/${req.params.imageName}`);
});

app.get('/gallery/images', (req, res) => {
    fs.readdir(`${__dirname}/images`, (err, files) => {
        if (err) {
            throw err;
        }

        res.send(files);
    });
});

app.delete('/gallery/image/:imageName', (req, res) => {
    fs.unlink(`${__dirname}/images/${req.params.imageName}`, (err) => {
        if (err) {
            throw err;
        }

        res.send();
    });
});