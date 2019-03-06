/* Ejercicio: Servidor que atiende a diferentes rutas:
   /usuario mostrará el login del usuario que accedió al sistema
   /carpeta mostrará el contenido de la carpeta principal de la aplicación
   / mostrará la página "index.html"
   /error.png mostrará la imagen "error.png" (forma parte de "error.html")
   Cualquier otra URL mostrará una página de error "error.html" */

const http = require('http');
const os = require('os');
const fs = require('fs');

let atenderPeticion = (request, response) => {
    
    if (request.url === '/usuario') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Usuario: " + os.userInfo().username);
    } else if (request.url == '/carpeta') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        fs.readdirSync('.').forEach(fichero => { response.write(fichero + "\n"); });
    } else if (request.url == '/') {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(fs.readFileSync('./index.html', 'utf8'));
    } else if (request.url == '/error.png') {
        response.writeHead(200, {"Content-Type": "image/png"});        
        response.write(fs.readFileSync('./error.png'));
    } else {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(fs.readFileSync('./error.html', 'utf8'));        
    }
    response.end();    
}

http.createServer(atenderPeticion).listen(8080);