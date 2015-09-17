// JavaScript source code
var servidor = require('./server.js');

var manejador = {};
manejador['/'] = inicio;
manejador['/camisetas'] = camisetas;
manejador['/cascos'] = cascos;
manejador['/about'] = about;
manejador['/favicon.ico'] = favicon;

function enrutador(manejador, ruta){
    if (typeof (manejador[ruta]) === 'function') {
        return manejador[ruta]();
    } else {
        console.log('No existe esa pagina');
    };
};

function inicio(){
    return '<h1>Esta es la página de inicio</h1>';
};
function camisetas(){
    return 'esta es la página de las camisetas';
};
function cascos(){
    return 'esta es la página de los cascos'
};
function about(){
    return 'esta es la página de about';
};

function favicon(){
    console.log('se ha perdido el favicon');
    return '';
};

servidor.iniciar(enrutador, manejador);