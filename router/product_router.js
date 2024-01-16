const express = require('express');
const router = express.Router();
//CONTROLLER
const controllerProduct = require('../controller/product_controller');

//GET PRODUCT
router.get('/product/v1/get_product', controllerProduct.sendProductToInterface);

//GET PRODUCTS
router.get('/products/v1/get_products', controllerProduct.sendProductsToInterface);

//SAVE PRODUCT
router.post('/product/v1/save_product', controllerProduct.createProduct);

//SAVE PRODUCTS
router.post('/products/v1/save_products', controllerProduct.createProducts);

//DELETE PRODUCT
router.delete('/product/v1/delete_product', controllerProduct.deleteProduct);

//DELETE PRODUCTS
router.delete('/products/v1/delete_products', controllerProduct.deleteProducts);

//UPDATE PRODUCTS
router.put('product/v1/update_product/:id', controllerProduct.updateProduct);



exports.router = router