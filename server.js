// 1. Import express
import express from 'express';

import swagger from 'swagger-ui-express'
import bodyParser from 'body-parser';
import cors from 'cors'

import productRouter from './src/features/product/product.routes.js';
import userRouter from './src/features/user/user.routes.js';
import cartRouter from './src/features/cartitems/cartitems.routes.js';
import jwtAuth from './src/middlewares/jwt.middleware.js';


import apiDocs from './swagger.json' assert {type:'json'};

// 2. Create Server
const server = express();


//setting up cors policy using cors liberary instead of handling them separatly
//like below.
var corsOptions = {
    origin: 'http://localhost:3000',
    allowedHeaders:'*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

server.use(cors(corsOptions));

// server.use((req,res,next)=>{
//     res.header('Access-Control-Allow-Origin','http://localhost:3000');
//     res.header('Access-Control-Allow-Headers','*');  // what part of header is access or all.
//     res.header('Access-Control-Allow-Methods','*');  // which method to allow like get,post
//     if(req.method=="OPTIONS"){
//         return res.sendStatus(200);
//     }
//     next();
// })

server.use(bodyParser.json());

// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use('/api-docs',swagger.serve,swagger.setup(apiDocs));
server.use("/api/products", productRouter);

server.use("/api/users",userRouter);

server.use("/api/carts",jwtAuth,cartRouter);

// 3. Default request handler
server.get('/', (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
});

// 4. Specify port.
server.listen(3200,()=>{
    console.log("Server is running at 3200");
});

