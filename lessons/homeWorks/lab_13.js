// Animal class
class Animal {
    constructor(name, maxSpeed) {
        this.name = name;
        this.speed = this.getRandomSpeed(maxSpeed);
    }

    getRandomSpeed(maxSpeed) {
        return Math.floor(Math.random() * maxSpeed) + 1;
    }

    getSpeed() {
        return this.speed;
    }
}

// Create objects for Horse, Tiger, and Dog
const horse = new Animal("Horse", 75);
const tiger = new Animal("Tiger", 100);
const dog = new Animal("Dog", 60);

// Function to determine the winner
function findWinner(animals) {
    let winner = animals[0];
    
    for (let i = 1; i < animals.length; i++) {
        if (animals[i].getSpeed() > winner.getSpeed()) {
            winner = animals[i];
        }
    }

    return winner;
}

// Array of animals in the race
const animals = [horse, tiger, dog];

// Determine the winner
const winner = findWinner(animals);

// Print the result
console.log(`Winner is ${winner.name}, with speed: ${winner.getSpeed()} km/h`);
