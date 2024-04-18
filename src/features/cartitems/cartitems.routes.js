

// Manage routes/paths to ProductController

// 1. Import express.
import express from 'express';
import CartItemsController from './cartitems.controller.js';
import jwtAuth from '../../middlewares/jwt.middleware.js';

// 2. Initialize Express router.
const cartRouter = express.Router();
const cartItemsController = new CartItemsController();

// All the paths to the controller methods.
// localhost/api/products 

//query parameters by ?
// localhost:4100/api/products/filter?minPrice=10&maxPrice=20&category=Category1

//  /:id these are route paramarter.

//  body paramater.(which are sent in body)

cartRouter.post(
    '/add',
    cartItemsController.add
);

cartRouter.get(
    '/getall',
    cartItemsController.getall
);

cartRouter.get(
    '/getcart',
    cartItemsController.get
);

export default cartRouter;