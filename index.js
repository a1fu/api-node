const mongoose = require('mongoose')
const app = require('./app')

//configuracion
const DB = 'api3'
const PORT = 5000

//conexion a la app
const conexionApp = (puerto) => {
    app.listen(puerto, () => {
        console.log(`corriendo en el puerto ${puerto}`)
    })
}

//conexion a base de datos
const conexionBaseDtaos = (base, puerto) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://localhost:27017/${base}`, { useNewUrlParser: true })
        .then(() => {
            console.log(`conexion a base de datos ${base}`)
            conexionApp(puerto)
        })
        .catch(error => console.log(error))
}

//corriendo api
conexionBaseDtaos(DB, PORT)

