var http = require('http');
var port = process.env.port || 1337;

http.createServer(inicioServer).listen(port);

function inicioServer(req, res) {
    console.log('entra en inicioServer');
    var url = req.url;
    var template = router(url);

    function router(u){
        var _t;
        switch (u) {
                case '/':
                case '/index':
                case '/index.html':
                    _t = './public/index.html';
                    console.log('entra en swith>case: index');
                    break;
                case '/temas':
                    _t = './public/temas.html';
                    break;
                default:
                    _t = './public/index.html';
                    break;       
        }
        return _t;
    };
    
    var fs = require('fs');
    var file = template;

    fs.readFile(file, 'utf-8', function (err, data) {
        if (err) { console.log(err); };
        if (data){ console.log(data);};
        res.write(data);
        res.end
        console.log('Ha entrado en readfile')
    });
    
};