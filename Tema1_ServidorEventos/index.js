/* Servidor web que utiliza ciertos eventos personalizados para decir "Buenos días", "Buenas tardes"
   o "Buenas noches" cuando recibe una petición de un cliente */
   
const http = require('http');
const Emitter = require('events');

const eventos_config = require('./eventos_config');

let gestor_eventos = new Emitter();

let peticionHora = (response) => {
    let hora = new Date().getHours();
    if (hora >= 7 && hora <= 12)
        response.write("Buenos días\n");
    else if (hora >= 13 && hora <= 20)
        response.write("Buenas tardes\n");
    else 
        response.write("Buenas noches");
};

let atenderPeticion = (request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    gestor_eventos.emit(eventos_config.eventos.HORA, response);
    response.end();
};

gestor_eventos.on(eventos_config.eventos.HORA, peticionHora);
http.createServer(atenderPeticion).listen(8080);