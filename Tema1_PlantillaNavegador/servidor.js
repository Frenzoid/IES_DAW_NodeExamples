/* Ejercicio: Servidor que procesa una página HTML, y reemplaza {saludo} por un mensaje
   indicando el navegador empleado */
   
const http = require('http');
const fs = require('fs');

let atenderPeticion = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    let contenido = fs.readFileSync('./saludo.html', 'utf8');
    let navegador = request.headers['user-agent'];
    if (navegador.indexOf("Chrome") >= 0)
        contenido = contenido.replace("{saludo}", "Utilizas Google Chrome");
    else
        contenido = contenido.replace("{saludo}", "Utilizas un navegador no reconocido");
    response.write(contenido);
    response.end();    
}

http.createServer(atenderPeticion).listen(8080);