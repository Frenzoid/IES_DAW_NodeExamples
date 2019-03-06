/* Ejercicio: usar la librería 'os' para detectar el usuario del sistema */

const os = require('os');
const usuario = os.userInfo();

console.log("Hola,", usuario.username);