import UserModel from "./user.model.js";
import jwt from 'jsonwebtoken';

export default class UserController {
    // Signup method
    signUp(req, res) {
        // Extract user data from the request body
        const { name, email, password } = req.body;
        
        // Call the signUp method of UserModel to create a new user
        const user = UserModel.signUp(name, email, password);
        
        // Send a successful response with the created user
        res.status(201).send(user);
    }

    // Signin method
    signIn(req, res) {
        // Extract user email and password from the request body
        const { email, password } = req.body;
        
        // Call the signIn method of UserModel to authenticate the user
        const result = UserModel.signIn(email, password);
        
        if (!result) {
            // If authentication fails, return a 400 Bad Request response
            return res.status(400).send('Incorrect Credentials');
        } else {
            // If authentication succeeds, create a JWT token

            // Define the payload for the JWT token
            const tokenPayload = {
                userId: result.id,
                email: result.email,
            };

            // Create the JWT token with a secret key and an expiration time
            const token = jwt.sign(
                tokenPayload,
                'AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz',
                {
                    expiresIn: '1h', // Token expires in 1 hour
                }
            );

            // Send the JWT token as a response
            return res.status(200).send(token);
        }
    }
}
