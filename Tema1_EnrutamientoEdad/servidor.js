/* Ejercicio: Servidor que procesa el nombre y la edad que envía el cliente como parte de la ruta
   La ruta tendrá el formato servidor:puerto/nombre/edad */

const http = require('http');

let atenderPeticion = (request, response) => {
    
    if (request.url.startsWith('/saludo')) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        let partes = request.url.split("/");
        let nombre = partes[2];
        let edad = partes[3];
        if (edad >= 18)
            response.write("Hola " + nombre + ", eres mayor de edad");
        else
            response.write("Hola " + nombre + ", no eres mayor de edad");
        response.end();
    }
}

http.createServer(atenderPeticion).listen(8080);