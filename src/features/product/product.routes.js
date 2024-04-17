// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import ProductController from './product.controller.js';
import jwtAuth from '../../middlewares/jwt.middleware.js';
import {upload} from '../../middlewares/fileupload.middleware.js';

// 2. Initialize Express router.
const productRouter = express.Router();
const productController = new ProductController();

// All the paths to the controller methods.
// localhost/api/products 

//query parameters by ?
// localhost:4100/api/products/filter?minPrice=10&maxPrice=20&category=Category1

//  /:id these are route paramarter.

//  body paramater.(which are sent in body)


productRouter.get(
    '/filter',
    jwtAuth,
    productController.filterProducts
);

productRouter.get(
    '/',
    jwtAuth, 
    productController.getAllProducts
);

productRouter.post(
    '/', 
    upload.single('imageUrl'), 
    productController.addProduct
);

productRouter.get(
    '/:id',
    productController.getOneProduct
);

productRouter.post(
    "/rate",
    jwtAuth,
    productController.rateProduct
);

export default productRouter;