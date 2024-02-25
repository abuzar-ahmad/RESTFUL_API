import PostModel from "./post.model.js";

// Get all posts from the PostModel
const posts = PostModel.getAll();

export default class PostController {
    // Get all posts controller with pagination
    getAllPosts(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10; // Default limit is 10 posts per page
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const paginatedPosts = posts.slice(startIndex, endIndex);

        res.status(200).json({
            page,
            limit,
            totalPosts: posts.length,
            data: paginatedPosts,
        });
    }

    // Get posts by user ID
    getPostsByUserId(req, res) {
        const userId = req.userId;
        console.log(userId);
        const userPosts = posts.filter((post) => post.userId == userId);
        console.log(userPosts);

        res.status(200).json({
            data: userPosts,
        });
    }

    // Get post by ID controller
    getPostById(req, res) {
        const postId = req.params.id;
        const post = posts.find((p) => p.id == postId);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json(post);
    };

    // Create post controller
    createPost(req, res) {
        const { caption, imageURL ,isDraft} = req.body;
        const postId = posts.length + 1;
        const userId = req.userId;
        const newPost = new PostModel(postId, userId, caption, imageURL, isDraft);
        posts.push(newPost);
        res.status(201).json(newPost);
    }

    // Delete post by ID controller
    deletePostById(req, res) {
        const postId = req.params.id;
        const index = posts.findIndex((p) => p.id == postId);
        console.log(index);
        console.log(postId);
        if (index == -1) {
            return res.status(404).json({ error: 'Post not found' });
        }
        const deletedPost = posts.splice(index, 1)[0];
        res.json(deletedPost);
    }

    // Update post by ID controller
    updatePostById(req, res) {
        const postId = req.params.id;
        const updatedPostIndex = posts.findIndex((p) => p.id == postId);
        if (updatedPostIndex == -1) {
            return res.status(404).json({ error: 'Post not found' })
        }
        const updatedPost = { ...posts[updatedPostIndex], ...req.body };
        posts[updatedPostIndex] = updatedPost;
        res.json(updatedPost);
    }

    // Filter posts by caption and paginate the results
    filterPosts(req, res) {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10; // Default limit is 10 posts per page
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;

        const caption = req.query.caption; // Optionally, filter by caption

        const filteredPosts = PostModel.filterByCaption(caption);

        const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

        res.status(200).json({
            page,
            limit,
            totalFilteredPosts: filteredPosts.length,
            data: paginatedPosts,
        });
    }

    // Toggle bookmark for a post
    toggleBookmark(req, res) {
        const postId = req.params.id;
        const post = posts.find((p) => p.id == postId)
        console.log(post);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' })
        }
        post.toggleBookmark();
        res.json(post);
    }

    // Get all posts sorted by user engagement (likes + comments)
    getAllPostsSortedByEngagement(req, res) {
        const sortedPosts = [...posts].sort((a, b) => {
            const engagementA = a.likes.length + a.comments.length;
            const engagementB = b.likes.length + b.comments.length;
            return engagementB - engagementA
        });
        res.status(200).send(sortedPosts)
    }

    // Get all posts sorted by date (newest to oldest)
    getAllPostsSortedByDate(req, res) {
        const sortedPosts = [...posts].sort((a, b) => {
            const dateA = new Date(a.createdAt);
            const dateB = new Date(b.createdAt);
            return dateB - dateA
        });
        res.status(200).send(sortedPosts)
    }
}
