var servidor = require("./server")
// define una variable para enlazar con un fichero
// (se sobreentiende la extensión js)

// Define el objeto manejador,
// que mapea cada URL válida a un función del servidor
// (definida en el módulo peticiones)

var manejador = {}
manejador['/'] = inicio;
manejador['/pagina1'] = pagina1;
manejador['/pagina2'] = pagina2;
manejador['/favicon.ico'] = favicon;


//router
// traducción de las rutas http a cada una de las fucniones del controler

function enrutar(manejador, ruta) {
    console.log("Voy a rutear algo para " + ruta);
    if (typeof manejador[ruta] === 'function') {
        return manejador[ruta]();
    } else {
        console.log("No existe una función para esa ruta: " + ruta);
    }
}

function enrutar1(manejador, ruta) {
    console.log("Voy a rutear algo para " + ruta);
    try  {
        return manejador[ruta]();
    } catch (error) {
        console.log(error + "No existe una función para esa ruta: " + ruta);
    }
}


// controler
// cada una de las funciones que se ejecutará en respuesta a un enrutamiento.
// La distintas funciones representarán las distintas interacciones con el modelo de datos

function inicio() {
    console.log("Has entrado en la pagina de inicio");
    return "<h1>Inicio</h1><p>Prueba con las rutas pagina1 y pagina2</p>";
}

function pagina1() {
    console.log("Has entrado en la página número 1");
    return "Página 1";
}

function pagina2() {
    console.log("Has entrado en la página número 2");
    return "Página 2";
}

function favicon() {
    console.log("Se ha pedido el favicon");
    return "";
}

// Ejecuta servidor iniciar, pasandole
// - un callback con la funcios que enrutara las peticiones
// - el objeto manejador, con las rutas definidas

servidor.iniciar(enrutar, manejador);