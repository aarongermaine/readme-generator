// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter instructions on how to install your project",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter steps needed to be taken to use the project",
    },
    {
      type: "input",
      name: "contribution",
      message: "Who can contribute and how?",
    },
    {
      type: "input",
      name: "test",
      message: "Please enter instructions for testing",
    },
    {
      type: "checkbox",
      message: "What license would you like to use?",
      name: "license",
      choices: ["MIT", "GNU", "Mozilla", "Unlicense"],
    },
    {
      type: "input",
      name: "github",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your business email",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();