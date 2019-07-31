const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    nombre: String,
    precio: String
})

module.exports = mongoose.model('Product', ProductSchema)