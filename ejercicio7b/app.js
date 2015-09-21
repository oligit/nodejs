
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var form = require('./routes/form.js');
var bodyParser = require('body-parser'); //esto es para trabajar con POST
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('stylus').middleware(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true })); //PARA EL POST

app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorhandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/form', form.imprimir);
app.post('/submitHello', function (req, res) {
    if (req.method.toLowerCase() == 'post') {
        console.info('entra en submitHello');
        res.send('Gracias por su envío ' + req.body.name);
    };
    
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
