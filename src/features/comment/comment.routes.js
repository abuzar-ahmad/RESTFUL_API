import express from 'express';
import CommentController from './comment.controller.js';

const commentRouter = express.Router();
const commentController = new CommentController();

// Route to get comments by post ID
commentRouter.get('/:id', commentController.getCommentsBtPostId);

// Route to add a comment to a post by post ID
commentRouter.post('/:id', commentController.addComment);

// Route to delete a comment by comment ID
commentRouter.delete('/:id', commentController.deleteComment);

// Route to update a comment by comment ID
commentRouter.put('/:id', commentController.updateComment);

export default commentRouter;
