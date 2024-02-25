import express from 'express';
import PostController from './post.controller.js';
import jwtAuth from '../../middleware/jwt.middleware.js';
import { upload } from '../../middleware/fileupload.middleware.js';

const postRouter = express.Router();

const postController = new PostController();

// Route to get all posts (requires JWT authentication)
postRouter.get('/all', jwtAuth, postController.getAllPosts);

// Route to get a post by ID
postRouter.get('/:id', postController.getPostById);

// Route to create a new post (includes file upload and JWT authentication)
postRouter.post('/', upload.single('imageURL'), jwtAuth, postController.createPost);

// Route to delete a post by ID
postRouter.delete('/:id', postController.deletePostById);

// Route to update a post by ID
postRouter.put('/:id', postController.updatePostById);

// Route to filter posts
postRouter.get('/filter', postController.filterPosts);

// Route to toggle bookmark for a post by ID
postRouter.put('/:id/bookmark', postController.toggleBookmark);

// Route to get all posts sorted by engagement (requires JWT authentication)
postRouter.get('/engagement', jwtAuth, postController.getAllPostsSortedByEngagement);

// Route to get all posts sorted by date (requires JWT authentication)
postRouter.get('/date', jwtAuth, postController.getAllPostsSortedByDate);

// Route to get posts by user ID (requires JWT authentication)
postRouter.get('/', jwtAuth, postController.getPostsByUserId);

export default postRouter;
