export default class CommentModel {
    constructor(id, userId, postId, content) {
        this.id = id;           // Unique identifier for the comment
        this.userId = userId;   // ID of the user who created the comment
        this.postId = postId;   // ID of the post that received the comment
        this.content = content; // The content of the comment
    }
}
