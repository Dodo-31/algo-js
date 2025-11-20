const prompt = require('prompt-sync')({ sigint: true });

let favoriteNumber;

do {
    favoriteNumber = Number(prompt("What's your favorite number? "));
    if (favoriteNumber !== 42) {
        console.log("Are you sure?");
    }
} while (favoriteNumber !== 42);

console.log("Congrats, you chose 42!");
