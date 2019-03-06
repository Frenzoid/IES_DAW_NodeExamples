/* Ejercicio: Servidor que procesa el nombre y la edad que envía el cliente como parte de la query-string
La ruta tendrá el formato servidor:puerto?nombre=XXX&edad=YYY */

const http = require('http');
// Empleamos la librería url para ayudarnos a procesar la query-string
const url = require('url');

let atenderPeticion = (request, response) => {
    
    if (request.url.startsWith('/saludo')) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        let parametros = url.parse(request.url, true).query;
        let nombre = parametros.nombre;
        let edad = parametros.edad;
        if (edad >= 18)
            response.write("Hola " + nombre + ", eres mayor de edad");
        else
            response.write("Hola " + nombre + ", no eres mayor de edad");
        response.end();
    }
}

http.createServer(atenderPeticion).listen(8080);