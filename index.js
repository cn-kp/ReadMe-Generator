// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description of your project: ",
    name: "description",
  },
  {
    type: "input",
    message: "Describe the installation process of your program: ",
    name: "installation",
  },
  {
    type: "input",
    message: "What is this program used for?",
    name: "usage",
  },
  {
    type: "list",
    message: "Chose the licenses for this project: ",
    name: "license",
    choices: [
      "Apache",
      "Creative",
      "Eclipse",
      "GNU",
      "ISC",
      "MIT",
      "Mozilla",
      "SIL",
    ],
  },
  {
    type: "input",
    message: "Who are the contributors of this projects?",
    name: "contributors",
  },
  {
    type: "input",
    message: "Please enter the GitHub Repo Link: ",
    name: "github-repo",
  },
  {
    type: "input",
    message: "Please enter the GitHub Deployed Link: ",
    name: "deploy",
  },
];

// var userAnswers= function(){
//     return inquirer.prompt(questions).
// }

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("Your README file is created");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((userInput) => {
    writeToFile("generatedREADME.md", generateMarkdown(userInput));
    console.log(userInput);
  });
  // writeToFile("README.md",(generateMarkdown(userAnswers)))
  // console.log(userInput)
}

// Function call to initialize app
init();
