/* Ejercicio: utilizar el módulo de terceros "lodash" para sacar unidos
   por comas los nombres de un vector */

const _ = require('lodash');
const nombres = ["Alex", "Arturo", "Julio", "Nacho"];
console.log(_.join(nombres, ","));
