

import CartItemsModel from "./cartitems.model.js";

export default class CartItemsController{
    add(req,res)
    {
        //we will get userID from token we will decode it.
        //It is one of the more secure way to get user id.
        const { productID,quantity } = req.query;
        const userID=req.userID;
        console.log("userID:",userID);
        CartItemsModel.add(productID,userID,quantity);
        return res.status(201).send("Cart is updated");
    }

    getall(req,res){
        const cart=CartItemsModel.getall();
        return res.status(200).send(cart);
    }

    get(req,res){
        const userID=req.userID;
        return res.status(200).send(CartItemsModel.get(userID));
    }
}