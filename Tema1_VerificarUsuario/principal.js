/* Ejercicio: verificar datos del usuario entrante */

const utilidades = require('./utilidades_os.js');

if (utilidades.esUsuario("pepe")) {
    console.log("Usuario correcto");
} else {
    console.log("El usuario no es 'pepe'");
}

console.log("El usuario correcto es '" + utilidades.loginUsuario + "'");