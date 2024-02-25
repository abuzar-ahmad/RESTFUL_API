import express from 'express';
import userRouter from './src/features/user/user.routes.js';
import jwtAuth from './src/middleware/jwt.middleware.js';
import postRouter from './src/features/post/post.router.js';
import commentRouter from './src/features/comment/comment.routes.js';
import likeRouter from './src/features/likes/like.routes.js';
import loggerMiddleware from './src/middleware/logger.middleware.js';
import { ApplicationError } from './error-handler/applicationError.js';

// Create server
const server = express();

server.use(express.json());

// Route for User
server.use('/api', userRouter);

// Middleware for logging requests
server.use(loggerMiddleware);

// Routes for post, comment, and like require JWT authentication
server.use('/api/posts', jwtAuth, postRouter);
server.use('/api/comment', jwtAuth, commentRouter);
server.use('/api/likes', jwtAuth, likeRouter);

// Default request handler
server.get('/', (req, res) => {
    res.send('Welcome to the social media app');
});

// Error handler middleware
server.use((err, req, res, next) => {
    console.log(err);
    if (err instanceof ApplicationError) {
        res.status(err.code).send(err.message);
    } else {
        // Handle server errors
        res.status(500).send('Something went wrong. Please try later.');
    }
});

// Middleware to handle 404 requests
server.use((req, res) => {
    res.status(404).send('API not found.');
});

// Specify the port
server.listen(5000, () => {
    console.log('Server is listening on port 5000');
});
