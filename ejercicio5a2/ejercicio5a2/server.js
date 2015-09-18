const PORT = 1337;
var express = require('express');
var app = express();

app.get('/', function (req, res) { 
    res.send('<h1>K dise kvron</h1>');
});

app.listen(PORT, function () {
    console.log('Aplicacion express en -> http://localhost' + PORT);
});