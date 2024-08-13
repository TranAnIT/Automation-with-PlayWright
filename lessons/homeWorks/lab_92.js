const prompt = require("prompt-sync")();
// Function to fetch a specific post by postId
async function fetchPostById(postId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        if (!response.ok) {
            throw new Error(`Error fetching post ${postId}: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching the specific post:', error);
    }
}

// Function to fetch all posts by userId
async function fetchPostsByUserId(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) {
            throw new Error(`Error fetching posts for user ${userId}: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching all posts for the user:', error);
    }
}

// Main function to handle user input and display posts
async function displayPosts() {
    const userId = prompt("Enter the user ID: ");
    const postId = prompt("Enter the post ID: ");

    // Fetch and display the specific post by postId
    const post = await fetchPostById(postId);
    if (post) {
        console.log(`\nPost Content:\nTitle: ${post.title}\nBody: ${post.body}\n`);
    }

    // Fetch and display all posts by the userId
    const posts = await fetchPostsByUserId(userId);
    if (posts && posts.length > 0) {
        console.log(`All posts by user ${userId}:`);
        posts.forEach(post => {
            console.log(`- ${post.title}`);
        });
    } else {
        console.log(`No posts found for user ${userId}`);
    }
}

// Call the main function to start the process
displayPosts();
