/* Módulo de utilidades para verificar al usuario entrante */

const os = require('os');

// Devuelve el login del usuario que entra
let loginUsuario = os.userInfo().username;

// Comprueba si el usuario que entra es el indicado como parámetro
let esUsuario = (login) => login === this.loginUsuario;

module.exports = {
    loginUsuario : loginUsuario,
    esUsuario : esUsuario
};