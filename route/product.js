const express = require('express')
const router = express.Router()

//controller
const ProductController = require('../controller/product')

router.get('/products', ProductController.getProducts)
router.get('/product/:id', ProductController.getProduct)
router.post('/product', ProductController.postProduct)
router.put('/product/:id', ProductController.putProduct)
router.delete('/product/:id', ProductController.deleteProduct)

module.exports = router

