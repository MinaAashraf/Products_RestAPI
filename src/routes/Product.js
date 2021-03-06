const { Router } = require('express');
const productController = require('../controllers/Product_Controller');
const productRouter = Router();

//ps: '/' --> http://localhost:8080/products/

// insert product
productRouter.post('/', productController.insertProduct);
// filter by category
productRouter.get('/filterByCategory/:category', productController.filterByCategory);
// filter by category and color
productRouter.get('/filterByCategoryAndColor/:category/:color', productController.filterByCategoryAndColor);
// filter by category and size
productRouter.get('/filterByCategoryAndSize/:category/:size', productController.filterByCategoryAndSize);
// filter by category and color and size
productRouter.get('/filterByCategoryAndColorAndSize/:category/:color/:size', productController.filterByCategoryAndColorAndSize);
// get all products
productRouter.get('/', productController.getAllProducts);
// get product by id
productRouter.get('/getById/:id', productController.getById);
// assending order
productRouter.get('/filterByprice/lth', productController.sortAssendingly);
// descending order
productRouter.get('/filterByprice/htl', productController.sortDescendingly);
// filter by brand
productRouter.get('/brand/:brand', productController.filterByBrand);
// filter by brand with category
productRouter.get('/brandwithcategory/:brand/:category', productController.filterByBrandAndCategory);
// update product
productRouter.put('/update/:id', productController.updateProduct);
// delete product
productRouter.delete('/:id', productController.deleteProduct);


module.exports = {productRouter,};