// product.controller.js
import ProductModel from "./product.model.js";

export default class ProductController {
    getAllProducts(req, res) {
        const products = ProductModel.getAll();
        res.status(200).json(products);
    }

    addProduct(req, res) {
        res.status(200).send("worked");
    }

    rateProduct(req, res) {
        // Implementation for rating a product
    }

    getOneProduct(req, res) {
        // Implementation for getting a single product
    }
}
