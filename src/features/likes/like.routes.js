import express from 'express';
import LikeController from './like.controller.js';

const likeRouter = express.Router();
const likeController = new LikeController();

// Route to get likes by post ID
likeRouter.get('/:postId', likeController.getLikesByPostId);

// Route to toggle like for a post by post ID
likeRouter.get('/toggle/:postId', likeController.toggleLike);

export default likeRouter;
