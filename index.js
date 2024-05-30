#! /usr/bin/env node
import inquirer from "inquirer";
// Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:",
    },
]);
const words = answers.sentence.trim().split(" ");
//Print the array of words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
