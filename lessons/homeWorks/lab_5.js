const prompt = require("prompt-sync")();
// Function to count words in a sentence
function countWords(sentence) {
    // Create an empty object to store word counts
    let wordCounts = {};

    // Convert the sentence to lowercase and split it into an array of words
    let words = sentence.toLowerCase().split(/\s+/);

    // Iterate through the array of words
    for (let word of words) {
        // If the word already exists in the object, increment its count
        if (wordCounts[word]) {
            wordCounts[word]++;
        } else {
            // If the word doesn't exist in the object, add it with a count of 1
            wordCounts[word] = 1;
        }
    }

    // Print out the word counts
    for (let word in wordCounts) {
        console.log(`${word}: ${wordCounts[word]}`);
    }
}

// Allow user to input a sentence
let inputSentence = prompt("Please enter a sentence:");

// Call the function with the user's input
countWords(inputSentence);
