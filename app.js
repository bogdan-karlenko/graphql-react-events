const express = require('express');
const bodyParser = require('body-parser');

const HOST = '0.0.0.0';
const PORT = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    res.send('Up and running!')
});

app.listen(PORT, HOST, err => {
    if (err) { throw err; }
});
console.log(`Running on http://${HOST}:${PORT}`);
