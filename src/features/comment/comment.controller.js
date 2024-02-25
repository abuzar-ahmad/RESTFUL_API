import CommentModel from "./comment.model.js";
import jwtAuth from "../../middleware/jwt.middleware.js";


// This will serve as our in-memory data store
const comments = [
    { id: '1', userId: 'user1', postId: '2', content: 'Comment 1 for post 2' },
    { id: '2', userId: 'user2', postId: '3', content: 'Comment 2 for post 3' },
    // Add more comments here as needed
  ];
  
export default class CommentController{
    // Retrieve all comments for a specific post
    getCommentsBtPostId(req, res){
        // const postId = req.params.id;
        // const postComments = comments.filter((comment)=>comment.postId==postId);
        // res.json(postComments);
        const postId = req.params.id;
        console.log('Requested Post ID:', postId);
        const postComments = comments.filter((comment) => comment.postId === postId);
        console.log('Filtered Comments:', postComments);
        res.json(postComments);
    };

    // Add a new comment to a specific post
    addComment(req, res){
        const postId=req.params.id;
        const{userId, content} = req.body;
        const id = comments.length+1
        const newComment = new CommentModel(id.toString(), userId, postId, content);
        comments.push(newComment);

        res.status(201).json(newComment);
    };

    // Delete a specific comment by ID
    deleteComment(req, res){
        const commentId = req.params.id;
        const index = comments.findIndex((comment)=>comment.id == commentId);
        if(index !== -1){
            comments.splice(index, 1);
            res.status(204).send('Comment deleted Successfully');
        }else{
            res.status(404).json({error: 'Comment not found'})
        };
    };

    // Update a specific comment by ID
    updateComment(req, res){
        const commentId = req.params.id;
        const {content} = req.body;
        const comment = comments.find((c)=>c.id==commentId);
        if(comment){
            comment.content = content;
            res.json(comment);
        }else{
            res.status(404).json({error:'Comment not found'})
        }
    }


}