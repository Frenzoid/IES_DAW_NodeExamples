const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/nuevo_contacto', (req, res) => {
    res.render('nuevo_contacto');
});

module.exports = router;