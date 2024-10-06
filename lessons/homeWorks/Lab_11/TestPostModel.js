const Post = require("./Post");
const RequestHandler = require("./RequestHandler");

async function lab11() {
    // Given params
    const userId = 1;
    const postId = 5;

    // Create RequestHandler object
    const requestHandler = new RequestHandler();

    // Print the target post
    await requestHandler.printTargetPost(userId, postId);

    // Print all posts for a user
    await requestHandler.printAllPosts(userId);
}

// Execution
lab11();
