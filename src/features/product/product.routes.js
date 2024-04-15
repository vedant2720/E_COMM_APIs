// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import ProductController from './product.controller.js';

// 2. Initialize Express router.
const ProductRouter = express.Router();
const productController = new ProductController();

// All the paths to the controller methods.
// localhost/api/products 
ProductRouter.get('/', productController.getAllProducts);
ProductRouter.post('/', productController.addProduct);


export default ProductRouter;