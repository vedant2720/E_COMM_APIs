

// Import necessary modules
import express from 'express';
import validationMiddleware from '../../middlewares/validator.middleware.js'; // Verify the path
import UserController from './user.controller.js';


// Create an instance of Express router
const userRouter = express.Router();
const userController= new UserController();


// Define routes for user sign-up and sign-in

userRouter.get(
    '/',
    userController.getall
);

userRouter.post(
    '/signUp', 
    validationMiddleware,
    userController.signUp
);

userRouter.post(
    '/signIn', 
    userController.signIn
);

// Export the user router
export default userRouter;
