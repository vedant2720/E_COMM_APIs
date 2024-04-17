import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req,res)
    {
        const products = ProductModel.getAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        const {name, price, sizes} = req.body;
        const newProduct = {
            name,
            price:parseFloat(price),
            sizes,
            imageUrl: req.file.filename,
        };
        const createdRecord=ProductModel.add(newProduct);
        res.status(201).send(createdRecord);
    }

    rateProduct(req,res){
        console.log(req.query);
        const userID = req.query.userID;
        const productID = req.query.productID;
        const rating = req.query.rating

        const err=ProductModel.rateProduct(userID,productID,rating);

        if(err){
            return res.status(400).send(err);
        }
        else{
            return res.status(200).send("rating added")
        }
    }

    getOneProduct(req,res){
        const id = req.params.id;
        const product = ProductModel.get(id);
        if(!product){
            res.status(404).send('Product not found');
        } else{
            return res.status(200).send(product);
        }
    }

    filterProducts(req, res) {
        const minPrice = req.query.minPrice;
        const maxPrice = req.query.maxPrice;
        const category = req.query.category;
        const result = ProductModel.filter(
            minPrice,
            maxPrice,
            category
        );
        res.status(200).send(result);
    }

}