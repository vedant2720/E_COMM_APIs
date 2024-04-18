

import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController {

    getall(req, res) {
        res.status(200).send(UserModel.get());
    }

    signUp(req, res) {
        const { email, password, name, type } = req.body;
        const newuser = UserModel.signUp(name, email, password, type);
        return res.status(201).send(newuser);
    }

    signIn(req, res) {
        const { email, password } = req.body;
        const newuser = UserModel.signIn(email, password);

        if (!newuser) {
            res.status(400).send("User not found/Invalid Credentials");
        } else {
            //1. create token
            const token = jwt.sign(
                { userId: newuser.id, email: newuser.email }, 
                    "0tvR5WYrrc5MQaW8DTK8NAOGu06TVR2u", 
                    {
                        expiresIn: "1h"
                    }   
            )
            //2. send it to client
            res.status(200).send(token);
        }
    }
}