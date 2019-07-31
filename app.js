const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const productRutas = require('./route/product')

//middlewrares
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use('/api', productRutas)

module.exports = app