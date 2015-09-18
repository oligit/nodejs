var http = require('http');
var port = process.env.port || 1337;
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/pagina1.html', function (req, res) { 
    res.send('<!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head><meta charset="utf-8" /><title></title></head><body><h1>Soy el index</h1></body></html>');
});
app.get('/pagina2.html', function (req, res) {
    res.send('<html><head></head><body><h1><p>soy la pagina 2</p></h1></body></html>');
});

app.listen(port);