/* Ejercicio: Servidor web que identifica si el cliente usa Chrome u otro navegador */

const http = require('http');

let atenderPeticion = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    let navegador = request.headers['user-agent'];
    if (navegador.indexOf("Chrome") >= 0)
        response.write("Utilizas Google Chrome");
    else
        response.write("Utilizas un navegador no reconocido");
    response.end();    
}

http.createServer(atenderPeticion).listen(8080);