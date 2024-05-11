#! usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to code with Mrsfaisal cli number guessing game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guessed number(number limit from 1 to 5):"
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation ! you guessed a correct number.");
}
else {
    console.log("sorry you guessed a wrong number");
}
