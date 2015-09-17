
var http = require('http');
var url = require('url');

// el servidor se trnasforma en un módulo:
// el código se encapsula en una función
// que luego se exporta, dandole un nombre
// (habitualmente el mismo que utiliza internamente la función)

// El módulo tiene una única función, invocada desde inicio
//recibiendo como parámetros:
// - un callback con la funcios que enrutara las peticiones
// - el objeto manejador, con las rutas definidas

function iniciar(enrutar, manejador) {  
  
    var port = 1337;    

    http.createServer(function (req, res) {
        
        // proceso la URL de la solicitud
        
        var ruta = url.parse(req.url).pathname;
        
        // Ejecuta el callback recibido, que enrutara las peticiones
        // pasandole el manejador con todas las rutas
        // y la ruta concreta resultado de procesar la URL        
        var contenido = enrutar(manejador, ruta);

        // Envia la respuesta adecuada en función del enrutamiento
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(contenido);
        res.end();
        
        
        console.log("Conexión en " + port);
    }).listen(port);
    console.log('Server ejecutandose en http://localhost');
}

exports.iniciar = iniciar;