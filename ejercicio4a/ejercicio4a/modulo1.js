// JavaScript source code
var http = require('http');
var port = process.env.port || 1337;
var url = require('url');
function start() {
    http.createServer(function (req, res) {
        var urlParts = url.parse(req.url, true);
        console.dir(urlParts.query);
        var nombre = urlParts.query.name;

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hola ' + nombre + '!');
        console.log('Petición de ' + nombre);
    }).listen(port);
};
exports.start = start;