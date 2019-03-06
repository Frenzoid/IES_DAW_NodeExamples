/* Ejercicio para acceder a varias URL de forma asíncrona, controlando la finalización de todas las
   tareas, y permitiendo que unas URL no empiecen a cargarse hasta que otras finalicen */

const request = require('request');

const urls = [
    {nombre: 'stackoverflow', url: "https://stackoverflow.com/", urlOrigen: ''},
    {nombre: 'google', url: "http://google.com", urlOrigen: 'ua'},
    {nombre: 'ua', url: "https://www.ua.es", urlOrigen: 'meneame'},
    {nombre: 'meneame', url: "https://www.meneame.net/", urlOrigen: 'stackoverflow'}
]

let contadorPaginas = 0;
let llamadaAsincrona = origen => {
    urls.forEach(url => {
        if (origen == url.urlOrigen) {
            request(url.url, (err, resp, body)  => {
                console.log("Finalizado", url.nombre);
                contadorPaginas++;
                if (contadorPaginas === urls.length)
                    console.log('Proceso completado');        
                llamadaAsincrona(url.nombre);
            });
        }
    });    
};

llamadaAsincrona('');