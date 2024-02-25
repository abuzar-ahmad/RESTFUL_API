import jwt from 'jsonwebtoken';

// Middleware for JWT Authentication
const jwtAuth = (req, res, next) => {
    // Read the JWT token from the 'Authorization' header of the request
    const token = req.headers['authorization'];
    
    // If no token is present, return an 'Unauthorized' response
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    // Check if the token is valid
    try {
        // Verify the token using the secret key ("AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz" in this case)
        const payload = jwt.verify(
            token,
            "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz"
        );
        
        // Set the 'userId' property in the request object to the user ID extracted from the token
        req.userId = payload.userId;

        // Log the token payload for debugging purposes
        console.log(payload);
    } catch (error) {
        // If the token verification fails, return an 'Unauthorized' response
        console.log(error);
        return res.status(401).send('Unauthorized');
    }

    // Call the next middleware in the request processing chain
    next();
};

export default jwtAuth;
