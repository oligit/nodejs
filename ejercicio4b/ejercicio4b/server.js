var http = require('http');
var url = require('url');
function iniciar(enrutador, manejador){
        
    var port = process.env.port || 1337;

    http.createServer(function (req, res) {
        var ruta = url.parse(req.url).pathname;
        var contenido = enrutador(manejador, ruta);
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.dir(contenido);
        res.write(contenido);
        res.end();
    }).listen(port);
};

exports.iniciar = iniciar;