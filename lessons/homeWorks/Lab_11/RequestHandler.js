const Post = require("./Post");

class RequestHandler {
    // This function simulates fetching posts from some API or database
    async _getAllPosts(userId) {
        // Simulated data for the sake of example
        const posts = [
            { userId: 1, postId: 1, title: "Post 1", body: "Content of post 1" },
            { userId: 1, postId: 2, title: "Post 2", body: "Content of post 2" },
            { userId: 1, postId: 5, title: "Post 5", body: "Content of post 5" },
            { userId: 2, postId: 3, title: "Post 3", body: "Content of post 3" }
        ];

        return posts.filter(post => post.userId === userId);
    }

    // Prints details of a single post
    async printTargetPost(userId, postId) {
        const posts = await this._getAllPosts(userId);
        const targetPost = posts.find(post => post.postId === postId);

        if (targetPost) {
            const post = new Post(targetPost.userId, targetPost.postId, targetPost.title, targetPost.body);
            console.log(post);
        } else {
            console.log(`Post with id ${postId} not found for user ${userId}`);
        }
    }

    // Prints details of all posts for a user
    async printAllPosts(userId) {
        const posts = await this._getAllPosts(userId);
        const postModels = posts.map(post => new Post(post.userId, post.postId, post.title, post.body));

        console.log(postModels);
    }
}

module.exports = RequestHandler;
