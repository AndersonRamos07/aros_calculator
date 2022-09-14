const express = require('express');
const app = express();
const path = require("path");
const fse = require("fs-extra");

const port = 7070;
const mainIndex = __dirname + '/public/index.html';

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.sendFile(path.join(mainIndex));
});

app.listen(port, ()=>{
    console.log(`running in ${port}`)
});