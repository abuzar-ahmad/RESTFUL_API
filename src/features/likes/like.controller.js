import LikeModel from "./like.model.js";

const likes = [];

export default class LikeController{
    // Retrieve all likes for a specific post
    getLikesByPostId(req, res){
        const postId = req.params.postId;
        const posLikes = likes.filter((like)=>like.postId == postId);
        res.json(posLikes)
    };

    // Toggle like status for a specific post
    toggleLike(req, res){
        const {userId} = req.body;
        const postId = req.params.postId;
        // Check if the user has already liked the post
        const existingLIkeIndex = likes.findIndex((like)=>like.userId ==userId);
        if(existingLIkeIndex !== -1){
            // User has already liked the post, remove the like
            likes.splice(existingLIkeIndex, 1);
            res.status(200).json({message: 'Like removed'});
        }else{
            // User has not liked the post, add a like
            const id = likes.length + 1;
            const newLike = new LikeModel(id.toString(), userId, postId);
            likes.push(newLike);
            res.status(200).json({message: 'Like added'});
        }

    }
}