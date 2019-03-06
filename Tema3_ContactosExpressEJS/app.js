const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const contactos = require('./routes/contactos');
const principal = require('./routes/index.js');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/contactos', {useMongoClient: true});

let app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('./public'));
app.use(bodyParser.json());
app.use('/contactos', contactos);
app.use('/', principal);

app.listen(8080);