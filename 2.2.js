const prompt = require('prompt-sync')({ sigint: true });

const min = Number(prompt("Enter the minimum number: "));
const max = Number(prompt("Enter the maximum number: "));

if (min > max) {
    console.log("Minimum is greater than maximum. Please double-check your numbers.");
} else {
    const current = Number(prompt("Enter the current number: "));

    if (current >= min && current <= max) {
        console.log(`${current} is between ${min} and ${max}`);
    } else {
        console.log(`${current} is NOT between ${min} and ${max}`);
    }
}