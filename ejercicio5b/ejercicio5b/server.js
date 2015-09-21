var http = require('http');
const PORT = 1337;
var express = require('express');
var fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('escuchando en puerto ' + PORT);
});