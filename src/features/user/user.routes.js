import express from 'express';
import UserController from './user.controller.js';

// Initialize an Express router
const userRouter = express.Router();

// Create an instance of the UserController class
const userController = new UserController();

// Define routes for the user-related functionality

// Route for user signup
userRouter.post('/signup', userController.signUp);

// Route for user signin
userRouter.post('/signin', userController.signIn);

// Export the userRouter for use in other parts of the application
export default userRouter;
