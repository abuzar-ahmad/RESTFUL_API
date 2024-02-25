export default class LikeModel {
    constructor(id, userId, postId) {
        this.id = id;       // Unique identifier for the like
        this.userId = userId;   // ID of the user who created the like
        this.postId = postId;   // ID of the post that received the like
    }
}
