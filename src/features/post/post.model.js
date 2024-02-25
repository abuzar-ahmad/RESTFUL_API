import UserModel from "../user/user.model.js";

export default class PostModel {
    constructor(id, userId, caption, imageURL, isDraft = false, isArchived = false, isBookmarked = false) {
        this.id = id;
        this.userId = userId;
        this.caption = caption;
        this.imageURL = imageURL;
        this.isDraft = isDraft;
        this.isArchived = isArchived;
        this.isBookmarked = isBookmarked;
    }

    // Static method to add a new post
    static add(post) {
        post.id = posts.length + 1;
        posts.push(post);
        return post;
    }

    // Static method to get a post by ID
    static get(id) {
        const post = posts.find((i) => i.id == id);
        return post;
    }

    // Static method to get all posts
    static getAll() {
        return posts;
    }

    // Static method to filter posts by caption
    static filterByCaption(caption) {
        return posts.filter((post) => post.caption.toLowerCase().includes(caption.toLowerCase()));
    }

    // Method to set the post as a draft
    setAsDraft() {
        this.isDraft = true;
    }

    // Method to unset the post as a draft
    unsetAsDraft() {
        this.isDraft = false;
    }

    // Method to set the post as archived
    setAsArchived() {
        this.isArchived = true;
    }

    // Method to unset the post as archived
    unsetAsArchived() {
        this.isArchived = false;
    }

    // Method to toggle bookmark for the post
    toggleBookmark() {
        this.isBookmarked = !this.isBookmarked;
    }
}

// Initial posts data (empty array)
var posts = [];
