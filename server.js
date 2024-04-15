// 1. Import express
import express from 'express';
import ProductRouter from './src/features/product/product.routes.js';


// 2. Create Server
const server = express();

// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
// Here, you're trying to use ProductRouter as middleware
server.use("/api/products", ProductRouter);

// 3. Default request handler
server.get('/', (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
});

// 4. Specify port.
server.listen(3200,()=>{
    console.log("Server is running at 3200");
});

