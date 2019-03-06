const express = require('express');
let Contacto = require('../models/contacto');

let router = express.Router();

router.get('/', (req, res) => {
    Contacto.find().then(resultado => {
        res.render('lista_contactos', {contactos:resultado});
    }).catch(error => {
        res.render('lista_contactos', {contactos: []});
    });        
});

router.get('/:id', (req, res) => {
    Contacto.findById(req.params.id).then(resultado => {
        if(resultado)
            res.render('ficha_contacto', {error: false, contacto: resultado});
        else
            res.render('ficha_contacto', {error: true, mensajeError: "No se han encontrado contactos"});
    });    
});

router.post('/', (req, res) => {
    let nuevoContacto = new Contacto({
        nombre: req.body.nombre,
        telefono: req.body.telefono,
        edad: req.body.edad
    });
    nuevoContacto.save().then(resultado => {
        res.send({error: false});
    }).catch(error => {
        console.log("ERROR:", error);
        res.send({error: true});
    });
});

module.exports = router;