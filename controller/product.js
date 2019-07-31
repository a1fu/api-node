const Product = require('../models/product')

const controller = {
    getProducts: (req, res) => {
        Product.find((err, products) => {
            if(err) return res.status(500).send({message: 'error conexion base de datos'})
            if(!products) return res.status(404).send({message: 'error en la peticion'})
            return res.status(200).send(products)
        })
    },
    getProduct: (req, res) => {
        const id = req.params.id
        if(id === null) return res.status(404).send({message: 'error eal enviar parametros'})

        Product.findById(id, (err, product) => {
            if(err) return res.status(500).send({message: 'error conexion base de datos'})
            if(!product) return res.status(404).send({message: 'error en la peticion'})
            return res.status(200).send(product)
        })
    },
    postProduct: (req, res) => {
        const productBody = new Product()
        productBody.nombre = req.body.nombre
        productBody.precio = req.body.precio

        productBody.save((err, product) => {
            if(err) return res.status(500).send({message: 'error conexion base de datos'})
            if(!product) return res.status(404).send({message: 'error en la peticion'})
            return res.status(200).send(product)
        })
    },
    putProduct: (req, res) => {
        const id = req.params.id
        const productBody = req.body
        if(id === null) return res.status(404).send({message: 'error eal enviar parametros'})
        if(productBody === null) return res.status(404).send({message: 'error eal enviar parametros'})

        Product.findByIdAndUpdate(id, productBody, {new: true}, (err, product) => {
            if(err) return res.status(500).send({message: 'error conexion base de datos'})
            if(!product) return res.status(404).send({message: 'error en la peticion'})
            return res.status(200).send(product)
        })
        
    },
    deleteProduct: (req, res) => {
        const id = req.params.id

        Product.findByIdAndRemove(id, (err, product) => {
            if(err) return res.status(500).send({message: 'error conexion base de datos'})
            if(!product) return res.status(404).send({message: 'error en la peticion'})
            return res.status(200).send(product)
        })
    }
}

module.exports = controller