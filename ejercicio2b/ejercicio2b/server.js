var http = require('http');
var port = process.env.port || 1337;
var fs = require('fs');

http.createServer(inicioServer).listen(port);

function inicioServer(req, res) {
    console.log('entra en inicioServer');
    var url = router(req.url);

    function router(u){
        var s;
        switch (u) {
                case '/':
                case '/index':
                case '/index.html':
                    s = './public/index.html';
                    console.log('entra en swith>case: index');
                    break;
                case '/temas':
                    s = './public/temas.html';
                    break;
                default:
                    s = './public/error.html';
                    break;       
        }
        return s;
    };

    fs.readFile(url, 'utf-8', function (err, data) {
        if (err) { console.log(err);};
        if (data) { console.log(data); }        ;
        res.writeHead(200, { 'Content-type' : 'text/html' });
        res.write(data);
        console.log('Ha entrado en readfile');
        res.end();
    });
    
};