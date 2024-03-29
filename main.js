#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log("Welcome-to-aq-coding");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessednumber",
        message: "guess number ",
        type: "number",
    },
]);
if (answer.userguessednumber === randomnumber) {
    console.log(chalk.blue(" Yes!! You Guessed It Right "));
}
else {
    console.log("Try Again");
}
