const prompt = require("prompt-sync")();
// Function to fetch a specific post by postId
function fetchPostById(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching post ${postId}: ${response.status}`);
            }
            return response.json();
        });
}

// Function to fetch all posts by userId
function fetchPostsByUserId(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching posts for user ${userId}: ${response.status}`);
            }
            return response.json();
        });
}

// Main function to handle user input and display posts
function displayPosts() {
    const userId = prompt("Enter the user ID: ");
    const postId = prompt("Enter the post ID: ");

    // Fetch the specific post by postId
    fetchPostById(postId)
        .then(post => {
            console.log(`Post Content:\n${post.title}\n${post.body}\n`);
        })
        .catch(error => {
            console.error('Error fetching the specific post:', error);
        });

    // Fetch all posts by the userId
    fetchPostsByUserId(userId)
        .then(posts => {
            console.log(`All posts by user ${userId}:`);
            posts.forEach(post => {
                console.log(`- ${post.title}`);
            });
        })
        .catch(error => {
            console.error('Error fetching all posts for the user:', error);
        });
}

// Call the main function to start the process
displayPosts();
